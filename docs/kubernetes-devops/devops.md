---
id: "devops"
title: "Azure DevOps"
---

Azure devops demo currently leverages
1.	Github repository to store the source code
2.	Azure devops to implement a build & deployment pipeline, build the demo application, push the image to azure container registry and deploy the image to AKS
To use this demo, follow below steps to open 3 webpages,
1.	Webpage 1 (Ctrl+Click this URL), sample vote demo application, currently, its version is "Azure Voting App - Azure Devops Pipeline(v1)", please highlight it to your customer, later the version will get changed to "Azure Voting App - Azure Devops Pipeline(v2)"
2.	Webpage 2 (Ctrl+Click this URL), this is sample application configuration file, we are going to change the configuration, rebuild and deploy it to AKS.
3.	Webpage 3 (Ctrl+Click this URL), Azure devops pipeline, used to show how build & deploy works here.
Demo steps:
1.	Go to webpage 2, click edit icon and change TITLE from 'Azure Voting App - Azure Devops Pipeline(v1)' to 'Azure Voting App - Azure Devops Pipeline(v2)'
 
2.	Click 'Commit changes' button to commit the change
 
3.	Switch to webpage 3, refresh the page (might be multiple times), it will show Azure devops pipeline is started.
 
4.	It is a multi-stages pipeline, it contains Build stage and Deploy stage
 
5.	Click the stage, show it to your customer how the build & deploy stage look like
 
 
6.	Once build & deploy are done (everything is green), switch to webpage 1, refresh the page, it should change the title to 'Azure Voting App - Azure Devops Pipeline(v2)'
 
7.	If your customer is interested in how 'Azure Devops Pipeline' looks like, you could open this link to show the pipeline definitions.

