function mySettings(props) {
  return (
    <Page>
      <Section 
        title={<Text bold align="center">Weather</Text>}>
         <Toggle
           settingsKey="unitToggle"
           label="US or Metric Units"
         />
      </Section>
       <Section
        title={<Text bold align="center">Seperator Bar Color</Text>}>
        <ColorSelect
          settingsKey="color"
          colors={[
            {color: "#FFCCCC"},
            {color: "#FF7F7F"},
            {color: "#FF4C4C"},
            {color: "#FF0000"},
            {color: "#CC0000"},
            {color: "#990000"},
            {color: "#660000"},
            
            {color: "#FF7700"}, 
            {color: "#FFAB00"},
            {color: "#FFCC00"},
            {color: "#FFFF00"},
            {color: "#E5E533"},
            {color: "#CCCC19"},
            {color: "#999919"},
            
            {color: "#B2FFB2"},
            {color: "#66FF66"},
            {color: "#33FF33"},
            {color: "#00FF00"},
            {color: "#00B200"},
            {color: "#339933"},
            {color: "#196619"},
            
            {color: "#00FF9C"},
            {color: "#00FFB9"},
            {color: "#00FFC8"},
            {color: "#00FFFF"},
            {color: "#00EEFF"},
            {color: "#00CDFF"},
            {color: "#00B6FF"},
            
            {color: "#B2B2FF"},
            {color: "#9999FF"},
            {color: "#4C4CFF"},
            {color: "#0000FF"},
            {color: "#0000B2"},
            {color: "#0000AA"},
            {color: "#004C99"},
           
            {color: "#9600FF"},
            {color: "#BE00FF"},
            {color: "#D300FF"},
            {color: "#FF00FF"},
            {color: "#FF00CB"},
            {color: "#FF009E"},
            {color: "#FF006A"}
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Contact Me</Text>}>
        <Text>
          Please don't hesitiate to contact me with questions or suggestions; but be sure to let me know which app or watchface you are talking about. This and all my other apps will always be free and Open Source. If you really like my app please considder buying me a coffee (or more likely electonic components that end up in my classroom). Thanks!
        </Text>
        <Link source="https://rawgit.com/cmspooner/Weather-and-Forecast/master/settings/email.html">
          <TextImageRow
            label="Email"
            sublabel="cmspooner@gmail.com"
            icon="https://github.com/cmspooner/Weather-and-Forecast/blob/master/resources/icons/settings/Email.png?raw=true"
          />
        </Link>
        <Link source="https://github.com/cmspooner">
          <TextImageRow
            label="Github"
            sublabel="https://github.com/cmspooner"
            icon="https://github.com/cmspooner/Weather-and-Forecast/blob/master/resources/icons/settings/Github.png?raw=true"
          />
        </Link>
        <Link source="https://paypal.me/CMSpooner">
          <TextImageRow
            label="PayPal"
            sublabel="cmspooner@gmail.com"
            icon="https://github.com/cmspooner/Weather-and-Forecast/blob/master/resources/icons/settings/Paypal.png?raw=true"
          />
        </Link>
      </Section>
      <Section
        title={<Text bold align="center">Build Version and Notes</Text>}>
         <Text>
          2.3.1 Beta: Moved timestamp to today header
        </Text>
        <Text>
          2.3 Beta: Added timestamp for old weather
        </Text>
        <Text>
          2.2 Beta: Changed Icon
        </Text>
        <Text>
          2.1 Beta: Adding Weather saving
        </Text>
        <Text>
          1.4.1: Added Bttery %
        </Text>
        <Text>
          1.4: Tap to change stats in odo
        </Text>
        <Text>
          1.3: Now with images for Speed and Odo
        </Text>
        <Text>
          1.2.3: Changed how stripes toggels work
        </Text>
        <Text>
          1.2.2: Pinstripes showing now?
        </Text>
        <Text>
          1.2.1: Pinstripes thicker
        </Text>
        <Text>
          1.2: Pinstripes thicker
        </Text>
        <Text>
          1.1: Lots of little fixes icluding fs writing
        </Text>
        <Text>
          1.0: First official release
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
