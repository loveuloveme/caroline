import { SiJira, SiAsana, SiTrello } from 'react-icons/si';

export const SERVICE = {
    TRELLO: 'TRELLO',
    JIRA: 'JIRA',
    ASANA: 'ASANA'
}

export const SERVICES = {
    [SERVICE.TRELLO]: {
        icon: SiTrello,
        color: 'caroline.blue',
        credential: {
            url: 'https://trello.com/app-key',
            fields: ['apiKey', 'oAuthToken']
        },
        isUrl: (str) => { }
    },
    [SERVICE.JIRA]: {
        icon: SiJira,
        color: '#34495e',
        credential: {
            url: 'https://app.asana.com/0/my-apps',
            fields: ['apiKey', 'oAuthToken']
        },
        isUrl: (str) => { }
    },
    [SERVICE.ASANA]: {
        icon: SiAsana,
        color: '#0052CC',
        credential: {
            url: 'https://id.atlassian.com/manage-profile/security/api-tokens',
            fields: ['host', 'email', 'apiToken']
        },
        isUrl: (str) => { }
    },
}