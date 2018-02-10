import React from 'react';
import { Card, CardHeader, CardHeaderTitle, CardImage, CardContent, Media, MediaLeft, MediaContent, Image, Subtitle, Title, CardHeaderIcon, Icon, Content } from 'bloomer'
import moment from 'moment'


const Pet = (props) => {
  const img_url = 'https://loremflickr.com/320/240/dog'
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          {props.pet.name}
        </CardHeaderTitle>
      </CardHeader>
      <CardImage>
        <Image isRatio='4:3' src={img_url} />
      </CardImage>
      <CardContent>
        <Content>
          Nơi mất: {props.pet.lost_location.city}, {props.pet.lost_location.city}
          <br />
          Thời gian mất: {moment(props.pet.lost_time).format("DD/MM/YYYY, h:mm a")}
        </Content>
      </CardContent>
    </Card>
  );
};

export default Pet;