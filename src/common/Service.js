import { SiJira, SiAsana, SiTrello } from 'react-icons/si';

export const SERVICE = {
    TRELLO: 'trello',
    JIRA: 'jira',
    ASANA: 'asana'
}

export const SERVICES = {
    [SERVICE.TRELLO]: {
        icon: SiTrello,
        color: 'caroline.blue',
        credential: {
            url: 'https://trello.com/app-key',
            fields: ['apiKey', 'oAuthToken']
        },
        isUrl: (str) => {
            return str.search('trello.com/b/') !== -1;
        }
    },
    [SERVICE.JIRA]: {
        icon: SiJira,
        color: '#0052CC',
        credential: {
            url: 'https://id.atlassian.com/manage-profile/security/api-tokens',
            fields: ['host', 'email', 'apiToken']
        },
        isUrl: (str) => {
            return str.search('atlassian.net/jira/') !== -1;
        }
    },
    [SERVICE.ASANA]: {
        icon: SiAsana,
        color: '#e74c3c',
        credential: {
            url: 'https://app.asana.com/0/my-apps',
            fields: ['apiToken']
        },
        isUrl: (str) => {
            return str.search('app.asana.com') !== -1;
        }
    },
}

export const getServiceName = (url) => {
    return Object.values(SERVICE).find(serviceName => SERVICES[serviceName].isUrl(url));
}