import commonAPI from "./commonAPI";
import service_url from "./serviceUrl";


// API Call for add video details

export const addVideoAPI=async(video)=>
{
       return await commonAPI("POST",`${service_url}/allVideos`,video)
}

// API Call For Get AllVideos

export const getVideoAPI=async()=>
{
       return await commonAPI("GET",`${service_url}/allVideos`,"")
}

//API Call for delete videocard

export const deleteVideoAPI=async(videoId)=>
{
return await commonAPI("DELETE",`${service_url}/allVideos/${videoId}`,{})
}

//API Call for add watchHistory
export const saveWatchHistory=async(videoDetails)=>
{
return await commonAPI("POST",`${service_url}/watchHistory`,videoDetails)
}      

//API Call for get watchHistory
export const getHistoryAPI=async()=>
{
return await commonAPI("GET",`${service_url}/watchHistory`,"")
}


//API CAll for delete videocard
export const deleteHistoryAPI=async(videoId)=>
{
return await commonAPI("DELETE",`${service_url}/watchHistory/${videoId}`,{})
}


//API Call for Add Category
export const addCategoryAPI=async(categoryDetails)=>
{
return await commonAPI("POST",`${service_url}/category`,categoryDetails)
}


//API Call for get ALL Category
export const getCategoryAPI=async()=>
{
return await commonAPI("GET",`${service_url}/category`,"")
}

//API Call for delete Category
export const deleteCategoryAPI=async(categoryId)=>
{
return await commonAPI("DELETE",`${service_url}/category/${categoryId}`,{})
}


//API Call for getting Single Video
export const getSingleVideoAPI=async(videoId)=>
{
return await commonAPI("GET",`${service_url}/allVideos/${videoId}`,"")
}


//API Call for update category
export const updateCategoryAPI=async(categoryId,categoryDetails)=>
{
return await commonAPI("PUT",`${service_url}/category/${categoryId}`,categoryDetails)
}


//API Call for get single category api

export const getSingleCategoryAPI=async(categoryId)=>
{
return await commonAPI("GET",`${service_url}/category/${categoryId}`,"")
}


