import React from 'react';
import { Card, CardHeader, CardHeaderTitle, CardImage, CardContent, Media, MediaLeft, MediaContent, Image, Subtitle, Title, CardHeaderIcon, Icon, Content } from 'bloomer'


const Pet = (props) => {
  const img_url = 'https://loremflickr.com/320/240/dog'
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          Component
            </CardHeaderTitle>
        <CardHeaderIcon>
          <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
      </CardHeader>
      <CardImage>
        <Image isRatio='4:3' src={img_url} />
      </CardImage>
      <CardContent>
        <Media>
          <MediaLeft>
            {/* <Image isSize='48x48' src='https://via.placeholder.com/96x96' /> */}
          </MediaLeft>
          <MediaContent>
            <Title isSize={1}>John Wick</Title>
            <Subtitle isSize={1}>@John Wick</Subtitle>
          </MediaContent>
        </Media>
        <Content>
          People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                <br />
          <small>11:09 PM - 30 October 2014</small>
        </Content>
      </CardContent>
    </Card>
  );
};

export default Pet;