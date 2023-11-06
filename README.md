# Front-end interview project
## code framework

React Hook + TypeScript + [Antd](https://ant.design/components/overview)

## Figma
[Image1](./task1.png)
[Image2](./task2.png)

## target
1. On the test page, Add a button with the content 'Add New Tag'. Click the button to open the pop-up box
2. In the pop-up box, you can check the tag, as shown in Image1, and supports filtering
3. If no result is found, the add form is displayed. Click the Add button to add a new tag, as shown in Image2
4. After the tag is selected, click the 'Assign Tags' button. The selected tags will be displayed on the 'test page'

## requirement
- Use [Antd](https://ant.design/components/overview) components as much as possible. Use [Antd](https://ant.design/components/overview) for all tabs, tags, ColorPicker,checkboxes, and form styles
- The images in Figma are just wireframes, the style does not need to follow this, it should be done using Antd style
- get tag api and post api uses the api in the 'api/index.ts' file
- The api and data processing logic are written in the 'context/global' file
- The relevant content of the page is written under the 'views/testPage' file

## How to submit code
Fork code from this github to your own github, after finishing on your own github, submit pr to this github

## Available Scripts

In the project directory, you can run:

### `yarn start:local`

Runs the app in the local mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
