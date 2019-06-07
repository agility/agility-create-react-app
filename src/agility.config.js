//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostsListing from './modules/PostsListing'
import PostDetails from './modules/PostDetails'
import Jumbotron from './modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

export default {
    guid: '191309ca-e675-4be2-bb29-351879528707', //Set your guid here
    accessToken: 'crafetch.9df8d3a3ef19205d82b479f80d4f111479e63a5a08d541502c8ce324e018672b', //Set your accessToken here
    languageCode: 'en-us',
    channelName: 'website',
    caching: {
        maxAge: 120000 //2 mins
    },
    moduleComponents: {
        RichTextArea,
        PostsListing,
        Jumbotron,
        PostDetails
    },
    pageTemplateComponents: {
        OneColumnTemplate
    }
}