---
title: "Apache APISIX and Kong and other gateways, in terms of technical points of comparison"
date: 2020-06-14 
---  

Author: Wen Ming

1. **The routing complexity of Apache APISIX is O(k), which is only related to the length of uri and not to the number of routes; the routing time complexity of kong is O(n), which grows linearly with the number of routes.**

2. **The IP matching time complexity of Apache APISIX is O(1), which does not run out of cpu resources with a large number of IP judgments; the latest version of kong has also switched to the IP matching library of Apache APISIX.**

3. **Apache APISIX's route matching, which accepts all of nginx's variables as conditions and supports custom functions; all other gateways have a few conditions built in.**

4. **Apache APISIX uses etcd as the configuration center, there is no single point, any one machine down, the gateway cluster can still run normally. Other mysql, postgres based gateways have single point issues.**

5. **Apache APISIX's configuration distribution takes only 1 millisecond to reach all gateway nodes, using etcd's watch; other gateways poll the database periodically, which generally takes 5 seconds to get the latest configuration.**

6. **Only Apache APISIX is open to custom load balancing mount points, none of the other gateways support them.**
