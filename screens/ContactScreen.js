import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Charlie McCharles",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Desiree Dee",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    name: "Katherine May",
    title: "CTO",
    company: "Good Bank",
    pic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Emily Patterson",
    title: "CMO",
    company: "Cats Inc",
    pic: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];




export default function ContactScreen() {

    return (
      
      <Container style={{padding: 20, marginTop: 20, marginBottom: 20,}}>
        <Content>
          <List>
            {contactsData.map((item) => {
              return (
                <ListItem avatar key={item.name}>
                  <Left>
                    <Thumbnail source={{ uri: item.pic }} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>
                      {item.title}, {item.company}
                    </Text>
                  </Body>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
  
