import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {StyledHeader, StyledHeaderInverse, StyledText, StyledTextInverse} from "../../components/Typography";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const liturgyTypes = [
    {
        letter: "N",
        name: "Liturgy Normal",
        values: [
            {
                title:"INTRODUCTION TO THE ORDERS",
                content:"INTRODUCTION \n" +
                    "The Synod of the Presbyterian Church of Ghana unanimously decided in 1993 at Odumase-Krobo that the liturgy published in 1965 was to be reviewed. The motion, tabled by the Rev. A.A. Beeko, read: \"New questions are being asked about our faith and Worship. The present liturgy, which was published in 1965, and has been in use since then, does not answer some of the questions raised. To satisfy the spiritual needs of Christians and also to enhance the spiritual edification of worshippers, a panel should be appointed to review the Presbyterian Church liturgy which was published about thirty years ago.\" The motion, seconded by Rev. Dr. B.A. Ntreh, was unanimously carried. (Synod Minutes 199). \n" +
                    "Panels were formed between 1995 and 1998 to undertake this task.ln the year 2002, the General Assembly revisited the matter. The Worship Committee was reconstituted and given the mandate to review the liturgy. Before being reconstituted, the Old Committee held workshops in all the Presbyteries to collate views on worship and allied matters and compiled the reaction of members into a document out of which the Late Very Rev. A. A. Beeko provided an initial write up. For the past six years, the Worship Committee mandated by the General Assembly has been working on the liturgical review.\n" +
                    "This book is the result of the work of the Worship Committee taking on board the work of all the panels, the reports from the Presbyteries, the contribution of the Late Very Rev. A.A. Beeko and feedback from the Presbyteries on the Worship Committee's draft review. \n" +
                    "In doing this work, it was borne in mind that by unanimously accepting the motion to have the liturgy reviewed in 1993, the Church had a two-fold concern. The first was the spiritual needs of Christians. Added to this was the need to enhance the spiritual edification of worshipers. \n" +
                    "To these considerations can be added the influence of cross-fertilization between the different Christian traditions of our time. In other words, the Presbyterian Church of Ghana, in line with other Presbyterian Churches worldwide holds the notion that public worship is a converting ordinance, with the outsider always in mind; and that at the same time it is an edifying ordinance, with the role of building up the Church. So it is hoped that the wide range of material in this book will go a long way in meeting these two concerns. \n" +
                    "Inclusive language is given consideration in this book. Language about people is inclusive: mankind, for example, becomes all or all people. The family of men becomes humankind. \n" +
                    "In speaking about God or addressing God, male-dominated language has been avoided wherever possible. Also, the You form, and not the Thou form, is used for addressing God. This seemingly simple change affects syntax and vocabulary. This, therefore, puts the obligation on the Committee to ensure that the language used is simple, contemporary and relevant. \n" +
                    "The prayers in the 1965 edition of the liturgy are presented in long paragraphs and coughed in equally long sentences. These lead to unnecessary strain on both reading and hearing them. To deal with this difficulty, the sentences have been shortened and the long paragraphs have been broken into smaller units to make for easy reading, understanding and participation by worshippers. \n" +
                    "After the review had been carried out, the Committee decided that instead of putting volumes one and two in one book as it was in the 1965 edition, they should rather be put into two books. Volume 1 consists mainly of the orders for worship and the administration sacraments and some other orders and prayers. Volume 2 contains ordinances and orders which are mostly for induction, commissioning, commendation and dedication of officers and properties of the Church and Church members. \n" +
                    "The table of contents reflects the Committee's aim to provide as comprehensive as possible, orders and prayers, building on the 1965 edition's breadth of material. Each volume begins with short notes and pattern for the order of service. In Volume 1, there are five Orders of Service for Morning Worship and six for Evening Worship. \n" +
                    "An attempt has been made to provide variety and freshness in services. One of the major innovations here is the putting together of adoration, thanksgiving and the singing of local choruses as they are all viewed as part and parcel of the adoration and praises in worshipping God. Also, the Third Morning Service, for instance places emphasis on the Commandments. When the commandments are combined with an acknowledgement of sin, they remind worshippers that our corrupted devotions and patterns of responsibility twist many ends and relationships of ordinary life. Moreover, when combined with assurances of forgiveness and mercy, we are reminded afresh of the grace of God. That is why the Commandments of our Lord Jesus Christ have been made to precede confession of sin and assurance of pardon in the Third Order. \n" +
                    "Also, in Volume 1, Forms and Orders for the Sacraments and Major Ordinances of the Church begin with Holy Baptism which has three orders namely, one for infants, one for candidates who can answer for themselves and one that combines both infants and adults put together. \n" +
                    "This is followed by the Service of Public Profession of Faith which is also a Service of Confirmation and Admission to the Lord's Supper. It accords baptism its central and fundamental role in the life and worship of the Church and in the experience of the individual Christian. So the service is geared towards the fulfilment of scripture in connection with 'the confirmation of one's faith in the Gospel in all knowledge and in all speech' (1Cor.1:5-6). This implies that you ought to know it (lessons are learnt) and you ought to say or profess it (they are recited or responded to verbally). \n" +
                    "So the Confirmation Service is so arranged as to allow Baptism before Confirmation where there are candidates who are not yet baptized but are ready for the Profession and Confirmation of their faith. \n" +
                    "For those who are baptised (on that day) and join in the profession of faith, they do not need to go through the rite of Confirmation again as by their baptism and profession of their faith, they have fulfilled the requirements for admission to the Lord's Supper. \n" +
                    "There are three Forms and Orders for Holy Communion in Volume 1. One for the normal Worship Service with Communion and two for the sick and the aged at home or hospital. \n" +
                    "The services are constructed to be Eucharistic in their form and order. That is why there are varieties of Thanksgiving or Eucharistic prayers. This is to strike a positive note of joy of the presence of Christ (for instance the Great Thanksgiving) as worshippers' fellowship together in this meal which is central to the well being of the Community of believers corporately and individually. That is why this is followed by the Order for re-admission of backsliders to the Holy Communion. \n" +
                    "Three Orders of Service are provided for Christian Marriage in Volume one. The first is the Solemnisation of Holy Matrimony, the second is Orders for Blessing of a Civil Marriage and the third is Thanksgiving for Marriage (with the Renewal of Marriage Vows). \n" +
                    "There are Forms and orders for various Funeral Services. Apart from these, there are varieties of materials available in the hope that ministers and other users of this book will find resources that are helpful in the various circumstances of bereavement. \n" +
                    "One of the notable additions to this book which is not in the 1965 edition is the Forms and \n" +
                    "Orders for Widowhood Rites. This is followed by one Order for Prayer Service which is also a new addition to the 1965 edition. \n" +
                    "The section that follows offers Additional Prayers for Occasional use and for Public Worship such as Intercessions, Petitions, Confessions, Thanksgiving and Dedication which were in the 1965 edition. \n" +
                    "There is a prayer for naming a child in the 1965 Edition but in this book, there is a full Order and Prayers for a Naming/ Outdooring Ceremony either in the Church or home of members \n" +
                    "In volume 2, there are Orders and Forms for the Ordination of a Minister; Consecration of Catechists; Commissioning of Elders; Commendation of Teachers and Nurses. These are followed by the Laying of Foundation Stone of a House and Dedication of a House. \n" +
                    "These are followed by Prayers and Orders for Special Days and Orders and Prayers for Church Festivals. \n" +
                    "The next set of Orders and Forms are those for Graduation into Junior Youth (JY) and Graduation into Young People's Guild (YPG) which are also new additions to the 1965 edition. \n" +
                    "The next set of Orders and Forms are for, Festivals of the Civil Year, Renewal of Covenants and Orders for Services during Traditional Festivals. \n" +
                    "The next series of orders are those for the services of Induction of Officers in the Church and its related institutions. This includes Induction of Moderator, Clerk, Presbytery Chairperson, Principal, Headmaster/ Mistress of an Institution. \n" +
                    "There is also a Form and Order for Matriculation Ceremony in Institutions for New Entrants to Presbyterian Institutions; Induction of Ministers; Commissioning of Probationers; Induction of Directors of Departments; Inauguration of Committees; Elevation to a District and Inauguration of a Congregation. \n" +
                    "The prayer and expectation of the Worship Committee are that this book will prove to be of service to the entire Church, not only to agents, liturgists and Presbyters/elders in that, its abundant variety of material will enrich the worship of the Church and revive the devotion of the people of God."
            },
            {
                title:"NOTES AND PATTERN FOR THE ORDER OF SERVICE",
                content:""
            },
            {
                title:"ORDERS FOR SUNDAY MORNING SERVICES",
                content:""
            },
            {
                title:"ORDERS FOR SUNDAY EVENING SERVICES",
                content:""
            },
            {
                title:"ORDER FOR RENEWAL OF COVENANTS",
                content:""
            },
            {
                title:"PRAYER SERVICE",
                content:""
            },
            {
                title:"FUNERAL ORDERS",
                content:""
            },
            {
                title:"WIDOWHOOD ORDERS",
                content:""
            },
            {
                title:"ORDER/PRAYERS FOR NAMING/OUT-DOORING",
                content:""
            },
            {
                title:"ORDER FOR GRADUATION INTO JUNIOR YOUTH (JY)",
                content:""
            },
            {
                title:"ORDER FOR GRADUATION INTO YOUNG PEOPLE'S GUILD",
                content:""
            },
            {
                title:"ORDER FOR GRADUATION INTO YOUNG PEOPLE'S GUILD (YPG)/YOUNG ADULTS (YAF)/MEN/WOMEN'S FELLOWSHIPS ",
                content:""
            },
            {
                title:"MATRICULATION CEREMONY ",
                content:""
            },
            {
                title:"INAUGURATION OF COMMITTEES",
                content:""
            },
            {
                title:"LAYING OF FOUNDATION STONE OF A HOUSE",
                content:""
            },
            {
                title:"DEDICATION OF A HOUSE",
                content:""
            },
            {
                title:"PRAYERS AND ORDERS FOR SPECIAL DAYS",
                content:""
            },
            {
                title:"ORDERS AND PRAYERS FOR CHURCH FESTIVALS",
                content:""
            },
            {
                title:"ORDERS FOR FESTIVALS OF THE CIVIL  YEAR",
                content:""
            },
            {
                title:"ORDERS OF SERVICES DURING TRADITIONAL FESTIVALS",
                content:""
            },
            {
                title:"ADDITIONAL ITEMS AND PRAYERS",
                content:""
            }
        ]
    },
    {
        letter: "O",
        name: "Liturgy Ordinance",
        values: [
            {
                title:"INTRODUCTION TO THE ORDERS",
                content:"INTRODUCTION \n" +
                    "The Synod of the Presbyterian Church of Ghana unanimously decided in 1993 at Odumase-Krobo that the liturgy published in 1965 was to be reviewed. The motion, tabled by the Rev. A.A. Beeko, read: \"New questions are being asked about our faith and Worship. The present liturgy, which was published in 1965, and has been in use since then, does not answer some of the questions raised. To satisfy the spiritual needs of Christians and also to enhance the spiritual edification of worshippers, a panel should be appointed to review the Presbyterian Church liturgy which was published about thirty years ago.\" The motion, seconded by Rev. Dr. B.A. Ntreh, was unanimously carried. (Synod Minutes 199). \n" +
                    "Panels were formed between 1995 and 1998 to undertake this task.ln the year 2002, the General Assembly revisited the matter. The Worship Committee was reconstituted and given the mandate to review the liturgy. Before being reconstituted, the Old Committee held workshops in all the Presbyteries to collate views on worship and allied matters and compiled the reaction of members into a document out of which the Late Very Rev. A. A. Beeko provided an initial write up. For the past six years, the Worship Committee mandated by the General Assembly has been working on the liturgical review.\n" +
                    "This book is the result of the work of the Worship Committee taking on board the work of all the panels, the reports from the Presbyteries, the contribution of the Late Very Rev. A.A. Beeko and feedback from the Presbyteries on the Worship Committee's draft review. \n" +
                    "In doing this work, it was borne in mind that by unanimously accepting the motion to have the liturgy reviewed in 1993, the Church had a two-fold concern. The first was the spiritual needs of Christians. Added to this was the need to enhance the spiritual edification of worshipers. \n" +
                    "To these considerations can be added the influence of cross-fertilization between the different Christian traditions of our time. In other words, the Presbyterian Church of Ghana, in line with other Presbyterian Churches worldwide holds the notion that public worship is a converting ordinance, with the outsider always in mind; and that at the same time it is an edifying ordinance, with the role of building up the Church. So it is hoped that the wide range of material in this book will go a long way in meeting these two concerns. \n" +
                    "Inclusive language is given consideration in this book. Language about people is inclusive: mankind, for example, becomes all or all people. The family of men becomes humankind. \n" +
                    "In speaking about God or addressing God, male-dominated language has been avoided wherever possible. Also, the You form, and not the Thou form, is used for addressing God. This seemingly simple change affects syntax and vocabulary. This, therefore, puts the obligation on the Committee to ensure that the language used is simple, contemporary and relevant. \n" +
                    "The prayers in the 1965 edition of the liturgy are presented in long paragraphs and coughed in equally long sentences. These lead to unnecessary strain on both reading and hearing them. To deal with this difficulty, the sentences have been shortened and the long paragraphs have been broken into smaller units to make for easy reading, understanding and participation by worshippers. \n" +
                    "After the review had been carried out, the Committee decided that instead of putting volumes one and two in one book as it was in the 1965 edition, they should rather be put into two books. Volume 1 consists mainly of the orders for worship and the administration sacraments and some other orders and prayers. Volume 2 contains ordinances and orders which are mostly for induction, commissioning, commendation and dedication of officers and properties of the Church and Church members. \n" +
                    "The table of contents reflects the Committee's aim to provide as comprehensive as possible, orders and prayers, building on the 1965 edition's breadth of material. Each volume begins with short notes and pattern for the order of service. In Volume 1, there are five Orders of Service for Morning Worship and six for Evening Worship. \n" +
                    "An attempt has been made to provide variety and freshness in services. One of the major innovations here is the putting together of adoration, thanksgiving and the singing of local choruses as they are all viewed as part and parcel of the adoration and praises in worshipping God. Also, the Third Morning Service, for instance places emphasis on the Commandments. When the commandments are combined with an acknowledgement of sin, they remind worshippers that our corrupted devotions and patterns of responsibility twist many ends and relationships of ordinary life. Moreover, when combined with assurances of forgiveness and mercy, we are reminded afresh of the grace of God. That is why the Commandments of our Lord Jesus Christ have been made to precede confession of sin and assurance of pardon in the Third Order. \n" +
                    "Also, in Volume 1, Forms and Orders for the Sacraments and Major Ordinances of the Church begin with Holy Baptism which has three orders namely, one for infants, one for candidates who can answer for themselves and one that combines both infants and adults put together. \n" +
                    "This is followed by the Service of Public Profession of Faith which is also a Service of Confirmation and Admission to the Lord's Supper. It accords baptism its central and fundamental role in the life and worship of the Church and in the experience of the individual Christian. So the service is geared towards the fulfilment of scripture in connection with 'the confirmation of one's faith in the Gospel in all knowledge and in all speech' (1Cor.1:5-6). This implies that you ought to know it (lessons are learnt) and you ought to say or profess it (they are recited or responded to verbally). \n" +
                    "So the Confirmation Service is so arranged as to allow Baptism before Confirmation where there are candidates who are not yet baptized but are ready for the Profession and Confirmation of their faith. \n" +
                    "For those who are baptised (on that day) and join in the profession of faith, they do not need to go through the rite of Confirmation again as by their baptism and profession of their faith, they have fulfilled the requirements for admission to the Lord's Supper. \n" +
                    "There are three Forms and Orders for Holy Communion in Volume 1. One for the normal Worship Service with Communion and two for the sick and the aged at home or hospital. \n" +
                    "The services are constructed to be Eucharistic in their form and order. That is why there are varieties of Thanksgiving or Eucharistic prayers. This is to strike a positive note of joy of the presence of Christ (for instance the Great Thanksgiving) as worshippers' fellowship together in this meal which is central to the well being of the Community of believers corporately and individually. That is why this is followed by the Order for re-admission of backsliders to the Holy Communion. \n" +
                    "Three Orders of Service are provided for Christian Marriage in Volume one. The first is the Solemnisation of Holy Matrimony, the second is Orders for Blessing of a Civil Marriage and the third is Thanksgiving for Marriage (with the Renewal of Marriage Vows). \n" +
                    "There are Forms and orders for various Funeral Services. Apart from these, there are varieties of materials available in the hope that ministers and other users of this book will find resources that are helpful in the various circumstances of bereavement. \n" +
                    "One of the notable additions to this book which is not in the 1965 edition is the Forms and \n" +
                    "Orders for Widowhood Rites. This is followed by one Order for Prayer Service which is also a new addition to the 1965 edition. \n" +
                    "The section that follows offers Additional Prayers for Occasional use and for Public Worship such as Intercessions, Petitions, Confessions, Thanksgiving and Dedication which were in the 1965 edition. \n" +
                    "There is a prayer for naming a child in the 1965 Edition but in this book, there is a full Order and Prayers for a Naming/ Outdooring Ceremony either in the Church or home of members \n" +
                    "In volume 2, there are Orders and Forms for the Ordination of a Minister; Consecration of Catechists; Commissioning of Elders; Commendation of Teachers and Nurses. These are followed by the Laying of Foundation Stone of a House and Dedication of a House. \n" +
                    "These are followed by Prayers and Orders for Special Days and Orders and Prayers for Church Festivals. \n" +
                    "The next set of Orders and Forms are those for Graduation into Junior Youth (JY) and Graduation into Young People's Guild (YPG) which are also new additions to the 1965 edition. \n" +
                    "The next set of Orders and Forms are for, Festivals of the Civil Year, Renewal of Covenants and Orders for Services during Traditional Festivals. \n" +
                    "The next series of orders are those for the services of Induction of Officers in the Church and its related institutions. This includes Induction of Moderator, Clerk, Presbytery Chairperson, Principal, Headmaster/ Mistress of an Institution. \n" +
                    "There is also a Form and Order for Matriculation Ceremony in Institutions for New Entrants to Presbyterian Institutions; Induction of Ministers; Commissioning of Probationers; Induction of Directors of Departments; Inauguration of Committees; Elevation to a District and Inauguration of a Congregation. \n" +
                    "The prayer and expectation of the Worship Committee are that this book will prove to be of service to the entire Church, not only to agents, liturgists and Presbyters/elders in that, its abundant variety of material will enrich the worship of the Church and revive the devotion of the people of God."
            },
            {
                title:"NOTES AND PATTERN FOR THE ORDER OF SERVICE",
                content:""
            },
            {
                title:"ORDERS FOR SUNDAY MORNING SERVICES",
                content:""
            },
            {
                title:"ORDERS FOR SUNDAY EVENING SERVICES",
                content:""
            },
            {
                title:"ORDER FOR RENEWAL OF COVENANTS",
                content:""
            },
            {
                title:"PRAYER SERVICE",
                content:""
            },
            {
                title:"FUNERAL ORDERS",
                content:""
            },
            {
                title:"WIDOWHOOD ORDERS",
                content:""
            },
            {
                title:"ORDER/PRAYERS FOR NAMING/OUT-DOORING",
                content:""
            },
            {
                title:"ORDER FOR GRADUATION INTO JUNIOR YOUTH (JY)",
                content:""
            },
            {
                title:"ORDER FOR GRADUATION INTO YOUNG PEOPLE'S GUILD",
                content:""
            },
            {
                title:"ORDER FOR GRADUATION INTO YOUNG PEOPLE'S GUILD (YPG)/YOUNG ADULTS (YAF)/MEN/WOMEN'S FELLOWSHIPS ",
                content:""
            },
            {
                title:"MATRICULATION CEREMONY ",
                content:""
            },
            {
                title:"INAUGURATION OF COMMITTEES",
                content:""
            },
            {
                title:"LAYING OF FOUNDATION STONE OF A HOUSE",
                content:""
            },
            {
                title:"DEDICATION OF A HOUSE",
                content:""
            },
            {
                title:"PRAYERS AND ORDERS FOR SPECIAL DAYS",
                content:""
            },
            {
                title:"ORDERS AND PRAYERS FOR CHURCH FESTIVALS",
                content:""
            },
            {
                title:"ORDERS FOR FESTIVALS OF THE CIVIL  YEAR",
                content:""
            },
            {
                title:"ORDERS OF SERVICES DURING TRADITIONAL FESTIVALS",
                content:""
            },
            {
                title:"ADDITIONAL ITEMS AND PRAYERS",
                content:""
            }
        ]
    },
];


const LiturgyTypeSelection = ({ navigation }) => {
    const navigateToLiturgyType = (liturgyTypeName, liturgyTypeValues) => {
        navigation.navigate("LiturgyType", { liturgyTypeName, liturgyTypeValues});
    };

    function renderType(liturgyType){
        return(
            <TouchableOpacity onPress={() => navigateToLiturgyType(liturgyType.item.name, liturgyType.item.values)}>
                <View style={[styles.listItem]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={[styles.circleShapeView, { backgroundColor: "#4142cf"}]}>
                            <StyledTextInverse style={{ fontSize: 20 }}>{liturgyType.item.letter}</StyledTextInverse>
                        </View>
                        <View style={{ justifyContent: "center"}}>
                            <StyledText style={{ fontSize: 20}}>{liturgyType.item.name}</StyledText>
                        </View>
                    </View>

                    <View>
                        <EvilIcons name={"chevron-right"} size={20}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.header]}>
                <View style={{ paddingLeft: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Ionicons name={"ios-arrow-back"} size={25} color="#FFFFFF" style={{ justifyContent: "center"}}/>
                    </TouchableOpacity>
                </View>

                <StyledTextInverse style={{ fontSize: 20, alignSelf: "center"}}>Liturgy Book Selection</StyledTextInverse>

                <View style={{ paddingRight: 20}}/>
            </View>

            <View style={[styles.list]}>
                <FlatList
                    data={liturgyTypes}
                    renderItem={renderType}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: "#FFFFFF",
    },

    header: {
        backgroundColor: "#387ecb",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40
    },

    list: {
        marginBottom: 70,
    },

    listItem: {
        padding: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: "#cecece",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    circleShapeView: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        backgroundColor: '#00BCD4',
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default LiturgyTypeSelection;
