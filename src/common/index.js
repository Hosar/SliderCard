import uuidv1 from 'uuid/v1';

export const formatImgArr = (arrImgs = []) => {
    const noImage = "https://vac-con.com/wp-content/themes/interchange/images/noimageavailable.png";
    if(arrImgs.length === 0) {
        return [{id: uuidv1(), url: noImage}]
    }
    const imgObjs = arrImgs.map((imgUrl) => ({
        id: uuidv1(),
        url: imgUrl
    }))
    return imgObjs;
}