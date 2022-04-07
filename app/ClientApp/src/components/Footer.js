import styled from "styled-components"
import { Facebook, Instagram, Twitter, Room, PhoneIphone, MailOutline } from "@mui/icons-material";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.div`
    margin: 20px 0px;
`; 
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img``;

const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>THEPROJECT.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non 
                    porro numquam harum tempore saepe itaque totam minus ducimus repudiandae,
                    voluptatem quis, at incidunt eaque repellendus expedita iste reiciendis ipsum!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>Rue du Torrent 26, 1815 Clarens
                </ContactItem>
                <ContactItem>
                    <PhoneIphone style={{marginRight:"10px"}}/>+41 78 745 87 12
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>info@theproject.ch
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
};

export default Footer