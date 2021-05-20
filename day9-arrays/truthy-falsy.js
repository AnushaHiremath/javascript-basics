/*
falsy values - false, 0,'', undefined, null,NaN
truthy values - true, 1,-1,[],{},['dct'],{name: 'arjun'}
*/

const values= [false,true,0,1,-1,'',undefined,null,NaN,[],{},['dct'],{name:'Arjun'}]

for(let i=0;i<values.length;i++){
    if(values[i]){
        console.log(values[i], 'truthy')
    }
    else{
        console.log(values[i], 'falsy')
    }
}

/*

false falsy
true truthy
0     falsy
1      truthy
-1     truthy
        falsy
undefined falsy
null     falsy
NaN      falsy
[]       truthy
{}       truthy
[ 'dct' ]   truthy
{ name: 'Arjun' }   truthy
*/