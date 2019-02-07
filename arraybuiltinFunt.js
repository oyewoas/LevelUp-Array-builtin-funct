// ARRAY 1
const texasss = [
    {
        name: 'Mike',
        age: 23,
        gender: 'm',
        us: false,
    },
    {
        name: 'Liz',
        age: 20,
        gender: 'f',
        us: true,
    },
    {
        name: 'Chris',
        age: 102,
        gender: 'm',
        us: true,
    },
    {
        name: 'Chuloo',
        age: 27,
        gender: 'm',
        us: false,
    },
    {
        name: 'Annie',
        age: 30,
        gender: 'f',
        us: true,
    },
];

// Part 1 - Find all users older than 24
const  findAllUsersOlderThan24 = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let user = inputArray.filter(user => {if (typeof user.age === 'number'){
        return user.age > 24
    } });
    return user;

};
console.log(findAllUsersOlderThan24(texasss));
// Part 2 - Find the total age of all users
const findTotalAge = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let usersAge = inputArray.map(users =>{if (typeof users.age === 'number'){
        return users.age;
    } });
    let ageSum;
    ageSum = usersAge.reduce((sum, element) => sum + element, 0);
    return `The total ages for users is: ${ageSum}`;
};
console.log(findTotalAge(texasss));
// Part 3 - List all female coders
const listAllFemaleCoders = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let femaleCoders;
    femaleCoders = inputArray.forEach(coder => {
        if (typeof coder.gender === 'string' && coder.gender === 'f') {
            let femaleCodersDetails;
            femaleCodersDetails = `The Female Coder ${coder.name} is ${coder.age} years old`;
            console.log(femaleCodersDetails);
        }
    });
   return femaleCoders;
};
listAllFemaleCoders(texasss);

// ARRAY 2
const newieyork = [
    {
        name: 'Michelle',
        age: 19,
        coder:true,
        gender: 'f',
        us: true,
    },
    {
        name: 'Sam',
        age: 25,
        coder:false,
        gender: 'm',
        us: false,
    },
    {
        name: 'Ivy',
        age: 26,
        coder:true,
        gender: 'f',
        us: false,
    },
    {
        name: 'Nick',
        age: 32,
        coder:true,
        gender: 'm',
        us: true,
    },
    {
        name: 'Jim Beglin',
        age: 65,
        coder:false,
        gender: 'm',
        us: true,
    },
];

// Part 1 - List all users in US in ascending order
const listAllUsUsersInAscend = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let usUsers = inputArray.filter(users => {if (typeof users.us === 'boolean'){
        return users.us === true
    } });

    let usUsersInAscendingOrder;
    usUsersInAscendingOrder = usUsers.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log(usUsersInAscendingOrder);

    let usersUs;
    usersUs = usUsersInAscendingOrder.forEach(user => {
            let usUsersDetails;
            usUsersDetails = `The User ${user.name} is ${user.age} years old and ${user.name} also lives in us`;
            console.log(usUsersDetails) ;

    });
    return usersUs;

};
listAllUsUsersInAscend(newieyork);
// Part 2 - Sort all users by age
const sortAllUsUsersByAgeInASC = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let usersAgeInAscendingOrder;
    usersAgeInAscendingOrder = inputArray.sort((a, b) => a.age > b.age ? 1 : -1);
    return usersAgeInAscendingOrder;
};
console.log(sortAllUsUsersByAgeInASC(newieyork));

const sortAllUsUsersByAgeInDESC = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let usersAgeInDescendingOrder;
    usersAgeInDescendingOrder = inputArray.sort((a, b) => a.age > b.age ? -1 : 1);
    return usersAgeInDescendingOrder;
};

console.log(sortAllUsUsersByAgeInDESC(newieyork));
// Part 3 -  List all female coders
const listFemaleCoders = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let femaleCoders;
    femaleCoders = inputArray.forEach(coder => {
        if (typeof coder.gender === 'string' && coder.gender === 'f') {
            let femaleCodersDetails;
            femaleCodersDetails = `The Female Coder ${coder.name} is ${coder.age} years old`;
            console.log(femaleCodersDetails);
        }
    });
    return femaleCoders;
};
listFemaleCoders(newieyork);
// ARRAY 3
const vegzas = [
    {
        name: 'Charly',
        age: 32,
        coder:true,
        gender: 'm',
    },
    {
        name: 'Law',
        age: 21,
        coder:true,
        gender: 'm',
    },
    {
        name: 'Rosey',
        age: 42,
        coder:false,
        gender: 'f',
    },
    {
        name: 'Steph',
        age: 18,
        coder:true,
        gender:'f'
    },
    {
        name: 'Jon',
        age: 47,
        coder:false,
        gender: 'm',
    },
];

// Part 1 - Find the total age of male coders under 25
const  findTotalAgeOfMaleUnder25 = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let usersWithAgeUnder25 = inputArray.filter(user => {if (typeof user.age === 'number'){
        return user.age < 25
    } });
    let usersAge = usersWithAgeUnder25.map(users =>{if (typeof users.age === 'number'){
        return users.age;
    } });
    let ageSum;
    ageSum = usersAge.reduce((sum, element) => sum + element, 0);
    return `The total ages for males under 25 is: ${ageSum}`;

};
console.log(findTotalAgeOfMaleUnder25(vegzas));
// Part 2 - List all male coders over 30
const listMaleCodersAbove30 = (inputArray) => {
    if (!Array.isArray(inputArray)) return;
    let maleCoders;
    maleCoders = inputArray.forEach(coder => {
        if (typeof coder.gender === 'string' && coder.gender === 'm' && coder.age>30) {
            let maleCoderDetails;
            maleCoderDetails = `The Male Coder ${coder.name} is ${coder.age} years old and he is above 30 years old`;
            console.log(maleCoderDetails);
        }
    });
    return maleCoders;
};
listMaleCodersAbove30(vegzas);
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
const addAllAges = (inputArray1, inputArray2, inputArray3 ) => {
    if (!(Array.isArray(inputArray1) && Array.isArray(inputArray2) && Array.isArray(inputArray3))) return;
    let usersAge1 = inputArray1.map(users =>{if (typeof users.age === 'number'){
        return users.age;
    } });
    let usersAge2 = inputArray2.map(users =>{if (typeof users.age === 'number'){
        return users.age;
    } });
    let usersAge3 = inputArray3.map(users =>{if (typeof users.age === 'number'){
        return users.age;
    } });
    let ageSum1 = usersAge1.reduce((sum, element) => sum + element, 0);
    let ageSum2 = usersAge2.reduce((sum, element) => sum + element, 0);
    let ageSum3 = usersAge3.reduce((sum, element) => sum + element, 0);

    let totalAgeSum;
    totalAgeSum = ageSum1 + ageSum2 + ageSum3;
    return `The total sum of Ages for All the cities is: ${totalAgeSum}`;
};
console.log(addAllAges(texasss, newieyork, vegzas));
