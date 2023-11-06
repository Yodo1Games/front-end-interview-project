import Mock from 'mockjs';

const list = Mock.mock([
    {
        "id": 44,
        "name": "Offline Concerns",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 43,
        "name": "Non-Issue",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 41,
        "name": "Lag / Freeze",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 40,
        "name": "Known Bug",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 39,
        "name": "IAP Issue",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 38,
        "name": "Feedback / Suggestion",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 37,
        "name": "Bug",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 36,
        "name": "Ad complaint",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 35,
        "name": "ANR / Crash",
        "color": "#FF8E00",
        "meaning": null
    },
    {
        "id": 34,
        "name": "Cannot Install",
        "color": "#0a00ff",
        "meaning": null
    }
]);  


Mock.mock('/api/get-tags', 'get', { code: 200, data: list});  

Mock.mock('/api/post-tags', 'post', (req) => {  
    const data = JSON.parse(req.body);
    list.push(data) 
    return list;
  });