let skills :String[] = ['Bash','Counter','Healing'];

interface Character{
    name:string;
    hp: number;
    skills:String[];
    hometown?: string;
}


const strider :Character = {
    name:'Strider',
    hp:100,
    skills:['Bash','Counter']
}

strider.hometown= 'Rivendell';

console.table(strider);

export{};