import { faker } from '@faker-js/faker';
const languages = ['spanish', 'english', 'french', 'german', 'italian', 'chinese', 'japanese'];
const languagesLevels = ['basic', 'advanced', 'expert', 'native'];
const skills = [
    'Svelte', 'React', 'Vue.js', 'Angular', 'HTML', 'CSS', 'JavaScript',
    'NodeJS', 'Express', 'Django', 'Flask', 'Ruby on Rails', 'ASP.NET', 'Spring',
    'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Oracle', 'SQL Server',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Java (Android)', 'Objective-C'];

const skillsLevels = ['basic', 'advanced', 'expert', 'master'];
const randomLanguages = [];
const randomSkills = [];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

for (let i = 0; i < getRandomInt(2, 5); i++) {
    const language = languages[getRandomInt(0, languages.length)];
    const level = languagesLevels[getRandomInt(0, languagesLevels.length)];
    if (!randomLanguages.find(lang => lang.name === language)) {
        randomLanguages.push({ name: language, level: level });
    }
}
for (let i = 0; i < getRandomInt(3, 7); i++) {
    const skill = skills[getRandomInt(0, skills.length)];
    const level = skillsLevels[getRandomInt(0, skillsLevels.length)];
    if (!randomSkills.find(ski => ski.name === skills)) {
        randomSkills.push({ name: skill, level: level });
    }
}
// Generar datos ficticios
const fakeName = faker.person.fullName()
const fakeTitle = faker.person.jobTitle();
const fakeCity = faker.location.streetAddress();
const fakeBirthdate = faker.date.past().toISOString().split('T')[0];
const fakeMail = faker.internet.email();
const fakePhone = faker.phone.number();
const fakeJobs = [
    {
        name: faker.company.name(),
        begin: faker.date.past().toISOString().split('T')[0],
        job: faker.person.jobTitle()
    },
    {
        name: faker.company.name(),
        begin: faker.date.past().toISOString().split('T')[0],
        job: faker.person.jobTitle()
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
    language: randomLanguages,
    skills: randomSkills
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