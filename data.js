const events = [
        {id: '1', name:'Tech Summit 2024', date:'2024-05-20', speakerlds:['1','2'], locationld:'1'},
        {id: '2', name:'Data Science Conference', date: '2024-05-15', speakerlds: ['3'], locationld: '2'},
];

const speakers = [
    {id: '1', name:'Alice Santos', expertise: 'Ai and Machine Learding'},
    {id:'2',name:'Carlos Silva', expertise: 'Blockchain'},
    {id:'3', name:'Mariana Costa', expertise: 'Data Science'},
];

const locations = [
    {id:'1', name:'Auditorio Principal', city: 'São Paulo'},
    {id: '2', name:'Centro de Convenções', city: 'Rio de Janeiro'},
];

module.exports = {events, speakers, locations};