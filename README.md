# Sorting Visualizer v3

Updated version of sorting-visualizer-v2

## Run locally
### Requirements
- node >= 22.14
- npm >= 10.9.2

Clone it from your shell  
```git clone https://github.com/intellimat/sorting-visualizer-v3.git```  

Install dependencies  
``` cd sorting-visualizer-v3 ```  
``` npm install ```  

Run it  
``` npm run dev  ```  

## Docker
You can build the Docker image  
``` docker build . -t intellimat/sorting-visualizer-v3:latest ```

And run it  
``` docker run -d -p 4200:80 intellimat/sorting-visualizer-v3:latest ```

Your app should be running now on _localhost:4200_

You can also pull the image from docker registry  
``` docker image pull intellimat/sorting-visualizer-v3:latest```
