import React from 'react-native';
import { ScrollView, Image } from "react-native";
import styles from './BannerStyle'

import news_banner_data from '../../news_banner_data.json'

const Banner = ({bannerNews}) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
            {
                news_banner_data.map(bannerNews => <Image style = {styles.banner_image} source={{uri: bannerNews.imageUrl}}/>)
            }
        </ScrollView>
    )
}


export default Banner;
