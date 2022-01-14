Hubees Icons

Soon, We're gonna have a good description here

### How to use

In the root of the project, copy and past the ".env.example" file and rename it to ".env".

Now let's get the Figma Token, go to this link: https://www.figma.com/settings, and follow the instructions as the gif below.

![programmatic-export](https://user-images.githubusercontent.com/84742204/149528455-13cd1cbb-81ad-41e5-ad27-47053bb4afb4.gif)

Once you got that, paste in the .env file on "FIGMA_TOKEN" parameter.

Now let's get the file you are using, once you open the figma file, you can get that on the URL:
![image](https://user-images.githubusercontent.com/84742204/149529364-8e921e65-569a-42d5-a5ed-88d98ab9bff4.png)

Go back to your ".env" file and paste it on "FILE_ID" parameter.

Your file should be like that:
![image](https://user-images.githubusercontent.com/84742204/149529169-ce6eec55-7c32-4fbd-aa1d-e286d7c100a4.png)

All right, now we just need to run the script to get the icons. 

### Available scripts
![image](https://user-images.githubusercontent.com/84742204/149529666-787ca3aa-2d41-46b4-a242-db1d720322a3.png)

npm run clean: Will delete all local icons;
npm run export: Will download locally all the icons from the pages solid and outline;
npm run rename: Will rename the icons, removing the extra prefix that figma bring by default, and add the prefix "hubees-";
npm run build: Will run clean, export and rename at once;
npm run np: This command help to create a npm version after run build;
npm run release: This command does everything needed to build and publish the icons lib. But to use it, you need to have git and npm access. 
