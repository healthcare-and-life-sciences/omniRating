<h1>A-HLS omniRating Documentation</h1>

omniRating is a simple LWC that can be placed in an OmniScript to allow a user to rank something 1 through 5 stars.  After the user selects their ranking the LWC writes bacl to the OmniScript JSON in the form of Step:1:CustomLWC1:rating:[selected rating will show up here 1, 2, 3, 4, or 5].  Once this data is stored in the JSON you can then send it to a DataRaptor, Integration Procedure, or do whatever you like. 

<h2>Business Objective</h2>

Allow users to rank items from an OmniScript. 

<h2>Package Includes:</h2>

*Custom Components (1)*

* omniRating LWC


<h2>Configuration Requirements</h2>

<h3>Configuration Steps:</h3>

1. The Data Pack folder in the following GitHub repository contains the Accelerator files. Please download the Data Pack and save them to your desktop: https://github.com/healthcare-and-life-sciences/omniRating 
2. Then, complete the following steps to import them into your Salesforce org.
    1. To Import, in your destination Salesforce org, Click on *App Launcher* → Search for '*OmniStudio DataPacks*' and click on it.
    2. Click on '*Installed*' and on the right side click on '*Import from*'.
    3. Select '*From File*' - When the window opens, select the Data Pack file that you downloaded and stored on your machine. Click '*Install*'.
3. Add the CustomLWC that you installed to an OmniScript of your choosing. 
4. Configure the custom properties for the LWC to define the size and branding. The following are the available properties which can be configured:
    1. *size* - Example value: 30px.  This will set the size of the stars
    2. *setcolor* - True. This will allow the color of the stars to be changed
    3. *selected* - Example value: #222212 (RGB HEX Value)
    4. *hover* - RGB Hex Value
    5. *notselected* - RGB Hex Value

NOTE: If you selects a color for ‘selected' use a darker color for 'hover' and then an even darker color for 'notselected' to get a nice effect. 


<h2>Revision History</h2>

* *Revision Short Description (Month Day, Year)*

    * Initial Version August 5, 2022

