const validation = new justValidate('#form'); 


validation
.addField(document.querySelector('#fullName'),[
    {
        rule: 'required'
    },
    {
        rule: 'minLegth',
        value: 3,
    },
    {
        rule: 'maxLength',
        value: 15,
    },
]) .addField(document.querySelector('#email'), [
    {
        rule: 'required',
    }, 
    {   
        rule: 'email',
    },
])