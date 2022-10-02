import type { NextPage } from "next";
import homeStyle from "../styles/Home.module.scss";
import Title from "../components/PresentationPage/Title";
import Info from "../components/PresentationPage/Info";
import TemplatesPage from "../components/TemplatesPage/TemplatesPage";
import Customization from "../components/CustomizationPage/Customization";
import pixelPerfect from "../public/home_icons/pixelPerfect.png";
import conversionReady from "../public/home_icons/pixelPerfect.png";
import modernUseful from "../public/home_icons/pixelPerfect.png";
import TargetingOptions1 from "../public/home_icons/TargetingOptions1.png";
import TargetingOptions2 from "../public/home_icons/TargetingOptions2.png";
import TargetingOptions3 from "../public/home_icons/TargetingOptions3.png";
import TargetingOptions4 from "../public/home_icons/TargetingOptions4.png";
import popupsmartLogo from "../public/home_icons/popupsmartlogo.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";

import Image from "next/image";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FrequentlyAskedQuestions = [
  {
    id: 1,
    title: "How do I pay for the essentials or premium plan?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
  },
  {
    id: 2,
    title:
      "Can I cancel my essentials or premium plan subscription at my time?",
    content:
      "You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription  automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    id: 3,
    title: "How do I pay for the essentials or premium plan?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
  },
  {
    id: 4,
    title: "We need to add new users to our team, how will that be billed?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
  },
  {
    id: 5,
    title: "How do I pay for the essentials or premium plan?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
  },
  {
    id: 6,
    title:
      "Can I cancel my essentials or premium plan subscription at my time?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
  },
];

const Home: NextPage = () => {
  return (
    <div className={homeStyle.card}>
      <Title></Title>
      <Info></Info>
      <TemplatesPage></TemplatesPage>
      <Customization></Customization>
      <div className={homeStyle.BelowInfo}>
        <h2>Conversion & UX ready popups & modals</h2>
        <div className={homeStyle.BelowBoxes}>
          <div>
            <Image
              src={pixelPerfect}
              alt="pixelPerfect"
              width={48}
              height={48}
            />
            <h3>Pixel Perfect</h3>
            <p>
              Helps you calculate your email marketing roi to measure success.
            </p>
          </div>
          <div>
            <Image
              src={conversionReady}
              alt="conversionReady"
              width={48}
              height={48}
            />
            <h3>Conversion Ready</h3>
            <p>
              Empowers your emails by generating afree code for a CTA in your
              subject line.
            </p>
          </div>
          <div>
            <Image
              src={modernUseful}
              alt="modernUseful"
              width={48}
              height={48}
            />
            <h3>Modern & Useful</h3>
            <p>
              Enables you to estimate the total profit of your investment on a
              popup service.
            </p>
          </div>
        </div>
        <div className={homeStyle.FreqAskQuestions}>
          <h2>Frequently Asked Questions</h2>
          <div className={homeStyle.FreqAskQuestionsElements}>
            {FrequentlyAskedQuestions.map(
              (Item: { id: number; title: string; content: string }) => {
                return (
                  <Accordion
                    key={Item.id}
                    className={homeStyle.FreqAskQuestionsEach}
                    disableGutters
                    sx={{
                      borderTop: "1px solid #EAEAEA",
                      boxShadow: "none",
                      marginBottom: "1px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<AddCircleOutlineIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {Item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      {Item.content}
                    </AccordionDetails>
                  </Accordion>
                );
              }
            )}
          </div>
        </div>
        <div className={homeStyle.endPage}>
          <h1>Build great popups without code</h1>
          <div className={homeStyle.Targeting}>
            <div className={homeStyle.TargetingWrapper}>
              <div className={homeStyle.TargetingIMGWrapper}>
                <Image
                  src={TargetingOptions1}
                  alt="TargetingOptions1"
                  width={70}
                  height={70}
                />
              </div>
              <h2>Targeting Options</h2>
              <p>Target +26 trigger to your visitors</p>
            </div>
            <div className={homeStyle.TargetingWrapper}>
              <div className={homeStyle.TargetingIMGWrapper}>
                <Image src={TargetingOptions2} alt="TargetingOptions2" />
              </div>
              <h2>No-Code</h2>
              <p>No code required while you’re creating a popup</p>
            </div>
            <div className={homeStyle.TargetingWrapper}>
              <div className={homeStyle.TargetingIMGWrapper}>
                <Image src={TargetingOptions3} alt="TargetingOptions3" />
              </div>
              <h2>Targeting Options</h2>
              <p>Integrated with your marketing and CRM platforms</p>
            </div>
            <div className={homeStyle.TargetingWrapper}>
              <div className={homeStyle.TargetingIMGWrapper}>
                <Image src={TargetingOptions4} alt="TargetingOptions4" />
              </div>
              <h2>Targeting Options</h2>
              <p>Don’t worry about speed and Amazon AWS resources</p>
            </div>
          </div>
        </div>
        <div className={homeStyle.end}>
          <Image src={popupsmartLogo} alt="popupsmart" width={32} height={32} />
          <p>Powered by Popupsmart</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
