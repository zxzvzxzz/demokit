---
id: github
title: Github
---

Github devops demo leverages github actions to build application, generate image, push image to azure container registry, and deploy image to AKS. It includes
1.	Github actions implemented pipleline
2.	Canary deployment
3.	Codeql to scan code triggered by push or schedule
It supports below scenarios
1.	Devops pipeline – build & deploy
2.	Canary Deployment in AKS
3.	Rollback when deployment gets failed
To use this demo, follow below steps to open 3 webpages
1.	Webpage 1(Ctrl+Click this URL), sample vote demo application, currently, its version is "Azure Voting App - Github Actions(v1)", please highlight it to your customer, later the version will get changed to "Azure Voting App – Github Actions(v2)"
2.	Webpage 2(Ctrl+Click this URL), this is sample application configuration file, we are going to change the configuration, rebuild and deploy it to AKS.
3.	Webpage 3(Ctrl+Click this URL), github actions, this is the webpage that will show how build & deploy works here.
Demo steps
Devops Pipeline
1.	Go to webpage 2, click edit icon and change TITLE from 'Azure Voting App - Github Actions(v1)' to ' Azure Voting App - Github Actions(v2)'
 
2.	Click 'Commit changes' button to commit the change
 
3.	Switch to webpage 3, refresh the page (might be multiple times), it will show github actions pipeline is started. It contains two actions, one is code scanning, another is build and deploy. 
 
4.	Click "Build and deploy" action, it has two stage, one is build and another is deploy, explain to your customer what github actions are doing right now, basically, it is building the code, pushing image to azure container registry, deploying the imaging to AKS

 
5.	Once build & deploy is completed, go to page 1, refresh it, you will see it changed to 'Azure Voting App – Github Actions(v2)'
 
Canary Deployment in AKS
1.	Visit URL https://github.com/devopsonazure/vote-github/edit/master/.github/workflows/build-deploy.yaml, uncomment below lines then commit the change to github
 
2.	Visit URL https://github.com/devopsonazure/vote-github/blob/master/azure-vote/config_file.cfg, modify version to v3, then commit change
 
3.	Go to webpage 1, refresh page, the version of application should change to v3
 
4.	Now, open a new browser and use in-private mode, paste and visit same URL from webpage 1, it should display v2
 
5.	This is because we have enabled canary deployment, both versions exist in same cluster, AKS will handle the requests and distribute them to different version of services.  From AKS backend, it has two deploys
kubectl get deploy -n github 
NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
azure-vote-back             1/1     1            1           3d23h
azure-vote-front            1/1     1            1           3d19h
azure-vote-front-baseline   1/1     1            1           22m
azure-vote-front-canary     1/1     1            1           22m

Rollback
1.	Visit URL https://github.com/devopsonazure/vote-github/edit/master/.github/workflows/build-deploy.yaml, add "_failed" into below line, then commit change to github, it will trigger a failed deployment
 
2.	Go to https://github.com/devopsonazure/vote-github/actions, click the newest Build and deploy link, you need to wait for some time until the deployment get failed, then show you to customer below screen, it shows after deploy failed, github action pipeline rolled back all changes.
 
3.	Go to webpage 1, refresh page, it will prove the service is still running and not affected by failed deployment.
