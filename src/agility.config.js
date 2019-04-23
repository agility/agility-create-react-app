//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostsListing from './modules/PostsListing'
import PostDetails from './modules/PostDetails'
import Jumbotron from './modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

export default {
    instanceID: '191309ca-e675-4be2-bb29-351879528707', //Set your instanceID here
    accessToken: 'aGd13M.c55f8b8ea74243b60e9703bcc588a790ceb71f63a11d3caedfceebf811cd2279', //Set your accessToken here
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