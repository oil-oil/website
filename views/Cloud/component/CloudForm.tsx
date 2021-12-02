import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { Formik, Field, Form } from "formik";
import AV from "leancloud-storage";
import getConfig from 'next/config';

const { leanCloudConfig } = getConfig().publicRuntimeConfig;
if (leanCloudConfig.appId !== '') {
  AV.init(leanCloudConfig);
}

type Props = {}

const CloudForm: NextPage<Props, any> = () => {
  const [imgVerify, setImgVerify] = useState<AV.Captcha>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  if (leanCloudConfig.appId === "") {
    return null;
  }

  const TestObject = AV.Object.extend('API7_Cloud_data');
  const testObject = new TestObject();

  const onImgRefresh = () => {
    AV.Captcha.request({
      width: 100,
      height: 40,
    }).then(function (captcha) {
      setImgVerify(captcha)
    });
  }

  useEffect(() => {
    onImgRefresh();
  }, []);

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", organization: "", extra: "", verify_code: "" }}
      onSubmit={async (values, actions) => {
        setIsLoading(true);
        const { verify_code, ...formData } = values;
        await new Promise((resolve) => setTimeout(resolve, 500));
        imgVerify.verify(verify_code).then(() => {
          Object.entries(formData).forEach(([k, v]) => {
            testObject.set(k, v);
          });
          testObject.save().then(() => {
            toast({
              title: 'Submit successfullly',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            actions.resetForm({
              values: {
                name: '',
                email: '',
                phone: '',
                organization: '',
                extra: '',
                verify_code: ''
              },
            });
            setIsLoading(false);
            onImgRefresh();
          })
        }).catch(() => {
          toast({
            title: 'verify error',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
          onImgRefresh();
        });
      }}
    >
      {(props) => (
        <Form>
          <Field name='name'>
            {({ field, form }) => (
              <FormControl id='name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input {...field} type='text' />
                <FormHelperText>We'll never share your name.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Field name='email'>
            {({ field, form }) => (
              <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input {...field} type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Field name='phone'>
            {({ field, form }) => (
              <FormControl id='phone' isRequired>
                <FormLabel>Phone</FormLabel>
                <Input {...field} type='text' />
                <FormHelperText>We'll never share your phone.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Field name='organization'>
            {({ field, form }) => (
              <FormControl id='organization' isRequired>
                <FormLabel>Organization</FormLabel>
                <Input {...field} type='text' />
                <FormHelperText>We'll never share your organization.</FormHelperText>
              </FormControl>
            )}
          </Field>

          <Field name='extra' >
            {({ field, form }) => (
              <FormControl id='extra' isRequired>
                <FormLabel>How do you knnow APISEVEN Cloud</FormLabel>
                <Input {...field} type='text' />
              </FormControl>
            )}
          </Field>

          <Field name='verify_code' validate={(value) => {
            let error;
            if (value.length !== 4) {
              error = "Please enter the correct verification code"
            } return error;
          }}>
            {({ field, form }) => (
              <FormControl id='verify_code' isRequired isInvalid={form.errors.verify_code && form.touched.verify_code}>
                <FormLabel>Please enter the verification code in the image</FormLabel>
                <div className="verifyBox">
                  <Input width="85%" {...field} min={4} type='text' />
                  <img onClick={onImgRefresh} src={imgVerify?.url} alt="" />
                </div>
                <FormErrorMessage>{form.errors.verify_code}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <div className="buttonBox">
            <Button isLoading={isLoading} type="submit" colorScheme="blue" size="lg" fontSize="md" width="100%" margin="0 auto">Submit</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CloudForm;
