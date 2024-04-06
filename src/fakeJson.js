import { faker } from '@faker-js/faker';

// Generar datos ficticios
const fakeName = faker.person.fullName()
const fakeTitle = faker.person.jobTitle();
const fakeCity = faker.location.streetAddress();
const fakeBirthdate = faker.date.past().toISOString().split('T')[0];
const fakeMail = faker.internet.email();
const fakePhone = faker.phone.number();
const fakeJobs = [
    {
        name: fakeName,
        begin: faker.date.past().toISOString().split('T')[0],
        job: fakeTitle
    },
    {
        name: fakeName,
        begin: faker.date.past().toISOString().split('T')[0],
        job: fakeTitle
    }
];
const fakeEducation = [
    {
        name: faker.person.jobTitle(),
        institute: "Universisty " + faker.person.fullName(),
        begin: faker.date.past().toISOString().split('T')[0],
        end: faker.date.past().toISOString().split('T')[0]
    },
    {
        name: faker.person.jobTitle(),
        institute: "Universisty " + faker.person.fullName(),
        begin: faker.date.past().toISOString().split('T')[0],
        end: faker.date.past().toISOString().split('T')[0]
    }
];
const fakeLinks = {
    github: faker.internet.url(),
    instagram: faker.internet.url(),
    linkedin: faker.internet.url(),
    web: ''
};
const fakeTags = {
    language: [
        {
            name: 'spanish',
            level: 'native'
        },
        {
            name: 'english',
            level: 'basic'
        }
    ],
    skills: [
        {
            name: 'Svelte',
            level: 'basic'
        },
        {
            name: 'React',
            level: 'basic'
        },
        {
            name: 'Bootstrap',
            level: 'basic'
        },
        {
            name: 'NodeJS',
            level: 'expert'
        },
        {
            name: 'PHP',
            level: 'advanced'
        },
        {
            name: 'C#',
            level: 'advanced'
        }
    ]
};

// Armar el objeto JSON
export const fakeJson = {
    photo: faker.image.avatar(),
    name: fakeName,
    title: fakeTitle,
    city: fakeCity,
    birthdate: fakeBirthdate,
    mail: fakeMail,
    phone: fakePhone,
    jobs: fakeJobs,
    education: fakeEducation,
    links: fakeLinks,
    tags: fakeTags
};