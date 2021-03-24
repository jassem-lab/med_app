import axios from "axios";

export const DashboardData = async () => {
    try {
        let res = await axios.post(`/api/customize/dashboard-data`)
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const getSliderImages = async () => {
    try {
        let res = await axios.get(`/api/customize/get-slide-image`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postUploadImage = async (formData) => {
    try {
        let res = await axios.post(`/api/customize/upload-slide-image`, formData)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postDeleteImage = async (id) => {
    try {
        let res = await axios.post(`/api/customize/delete-slide-image`, {id})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
