//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostsListing from './modules/PostsListing'
import PostDetails from './modules/PostDetails'
import Jumbotron from './modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

export default {
    instanceID: '191309ca-e675-4be2-bb29-351879528707', //Set your instanceID here
    accessToken: 'WcOt8LMD3UghwaY2g5zNqofY126dG4FwozpJQ/2q1uVVcBSyqPa1nNcgGi1bmlC15/2EJNxFQZI/nxuPNWG0hw==', //Set your accessToken here
    languageCode: 'en-us',
    channelName: 'website',
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