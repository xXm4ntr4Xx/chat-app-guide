Create a live Chat

1.after create and clean the app folder we install the ( react-chat-engine)

<img width="226" alt="Screenshot 2022-03-25 at 12 15 35" src="https://user-images.githubusercontent.com/74420607/160119005-4b079173-7336-47ae-aac2-b8161c4e2a32.png">


2.we import ChatEngine

<img width="257" alt="Screenshot 2022-03-24 at 14 46 08" src="https://user-images.githubusercontent.com/74420607/159942436-4b11349f-fd1a-4605-9b44-76d87ff3f3ed.png">
</hr>

3.And now we can insert the chat engine component

<img width="81" alt="Screenshot 2022-03-24 at 14 48 27" src="https://user-images.githubusercontent.com/74420607/159942967-5fb500b4-da7f-484e-8b19-26bef87f4951.png">

-we add the username , useSecret(is the password) and the project Id(we retreive this element from https://chatengine.io/ after we have created them on the website)

<img width="612" alt="Screenshot 2022-03-24 at 14 52 02" src="https://user-images.githubusercontent.com/74420607/159943799-39d01b77-3c31-49ab-a47b-b31b68a8a4cb.png">

<img width="614" alt="Screenshot 2022-03-24 at 14 52 50" src="https://user-images.githubusercontent.com/74420607/159943998-be9d3a7f-d6b5-469a-85cc-be5bfc2d3a0d.png">

<hr/>



4.This is the result,we are able to send  message

<img width="661" alt="Screenshot 2022-03-25 at 12 20 58" src="https://user-images.githubusercontent.com/74420607/160119751-30d45a78-493f-4eb8-8d89-ed801eed1cf1.png">
<hr/>

5.In the image above we can see two extra user on the chat because we add a direct messaging option

<img width="160" alt="Screenshot 2022-03-25 at 12 23 38" src="https://user-images.githubusercontent.com/74420607/160120119-91b25ba0-7099-4d14-a856-9952d3d58faf.png">

<hr/>
6.we create a components where we import chatengine and a getorcreatechat

<img width="372" alt="Screenshot 2022-03-25 at 12 26 12" src="https://user-images.githubusercontent.com/74420607/160120514-a0301e2b-5f7c-4c2e-bf8d-b7517f953b6b.png">


7.if we want multiple person on the same chat we set the different chat engine components with different username and password(userSecret) and we pass the same project id for all the user involved

- we wrote a message with Tom's account
- 
<img width="314" alt="Screenshot 2022-03-25 at 12 42 53" src="https://user-images.githubusercontent.com/74420607/160122788-142acc0e-fce5-428e-938f-e72d5cffac86.png">

-we wrote a message with Sam's account

<img width="313" alt="Screenshot 2022-03-25 at 12 44 08" src="https://user-images.githubusercontent.com/74420607/160122962-b0893e95-c53c-4249-a31b-bffbe6013d06.png">

-and also with my account 

<img width="300" alt="Screenshot 2022-03-25 at 12 44 55" src="https://user-images.githubusercontent.com/74420607/160123079-aa7214e1-e8ab-4e5d-9de0-8058652dc3d3.png">


<hr/>

8. This is the result on chat app with all the users involved

<img width="658" alt="Screenshot 2022-03-25 at 12 47 22" src="https://user-images.githubusercontent.com/74420607/160123420-46c8b2d2-91b8-46fe-b965-e614bdeff44a.png">

