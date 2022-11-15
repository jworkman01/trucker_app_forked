/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function PurchaseHistoryPageComp(props) {
  const { overrides, ...rest } = props;
  const downArrowIconOneOnClick = useNavigateAction({
    type: "url",
    url: `${"/ProfilePage"}${""}`,
  });
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(217,217,217,1)"
      {...rest}
      {...getOverrideProps(overrides, "PurchaseHistoryPageComp")}
    >
      <View
        width="1322px"
        height="840px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="132px"
        left="48px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Image
        width="15.14%"
        height="19.82%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="44.73%"
        bottom="35.45%"
        left="8.89%"
        right="75.97%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "imageIcon 1")}
      ></Image>
      <Image
        width="2.29%"
        height="3.13%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13.96%"
        bottom="82.91%"
        left="6.87%"
        right="90.83%"
        transformOrigin="top left"
        transform="rotate(89.9deg)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        onClick={() => {
          downArrowIconOneOnClick();
        }}
        {...getOverrideProps(overrides, "downArrowIcon 1")}
      ></Image>
      <Text
        fontFamily="Playfair Display"
        fontSize="36px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="47.987998962402344px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="95px"
        height="46px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="133px"
        left="109px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Back"
        {...getOverrideProps(overrides, "Back")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="48px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="63.9839973449707px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="592px"
        height="71px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="138px"
        left="424px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Purchase History Details"
        {...getOverrideProps(overrides, "Purchase History Details")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="50px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="284px"
        left="105px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Orders"
        {...getOverrideProps(overrides, "Orders")}
      ></Text>
      <View
        width="1214px"
        height="6px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="347px"
        left="113px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <View
        width="1214px"
        height="6px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="667px"
        left="113px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 5")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="437px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="384px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Order Date: July 2, 2020&#xA;"
        {...getOverrideProps(overrides, "Order Date: July 2, 2020")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="490px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="423px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Order Number: #123-45-2345"
        {...getOverrideProps(overrides, "Order Number: #123-45-2345")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="420px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="493px"
        left="346px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Item Description: ..."
        {...getOverrideProps(overrides, "Item Description: ...128295")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="536px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="532px"
        left="346px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Estimated Delivery: July 5, 2020"
        {...getOverrideProps(overrides, "Estimated Delivery: July 5, 2020")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="527px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="571px"
        left="343px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tracking Number: 1939485932"
        {...getOverrideProps(overrides, "Tracking Number: 1939485932")}
      ></Text>
      <Image
        width="15.14%"
        height="19.82%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="74.9%"
        bottom="5.27%"
        left="8.89%"
        right="75.97%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "imageIcon 2")}
      ></Image>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="490px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="693px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Order Date: October 15, 2020&#xA;"
        {...getOverrideProps(overrides, "Order Date: October 15, 2020")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="490px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="732px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Order Number: #135-25-2360"
        {...getOverrideProps(overrides, "Order Number: #135-25-2360")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="386px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="802px"
        left="346px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Item Description: ..."
        {...getOverrideProps(overrides, "Item Description: ...128323")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="566px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="841px"
        left="346px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Estimated Delivery: October 18, 2020"
        {...getOverrideProps(overrides, "Estimated Delivery: October 18, 2020")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.99199867248535px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="499px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="880px"
        left="340px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tracking Number: 5439575981"
        {...getOverrideProps(overrides, "Tracking Number: 5439575981")}
      ></Text>
      <View
        width="310px"
        height="79px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="558px"
        left="1001px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.03)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="308px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="576px"
        left="1001px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Return Item"
        {...getOverrideProps(overrides, "Return Item128327")}
      ></Text>
      <View
        width="298px"
        height="79px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="841px"
        left="1016px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.03)"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="296px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="859px"
        left="1016px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Return Item"
        {...getOverrideProps(overrides, "Return Item128329")}
      ></Text>
    </View>
  );
}
