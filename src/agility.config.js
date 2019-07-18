//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostsListing from './modules/PostsListing'
import PostDetails from './modules/PostDetails'
import Jumbotron from './modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

export default {
    guid: 'ade6cf3c', //Set your guid here
    accessToken: 'defaultlive.201ffdd0841cacad5bb647e76547e918b0c9ecdb8b5ddb3cf92e9a79b03623cb', //Set your accessToken here
    languageCode: 'en-us',
    channelName: 'website',
    caching: {
        maxAge: 0
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