//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostsListing from './modules/PostsListing'
import PostDetails from './modules/PostDetails'
import Jumbotron from './modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

export default {
    instanceID: '191309ca-e675-4be2-bb29-351879528707', //Set your instanceID here
    accessToken: 'aGd13M.fa30c36e553a36f871860407e902da9a7375322457acd6bcda038e60af699411', //Set your accessToken here
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