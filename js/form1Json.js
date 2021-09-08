var formJson =
{
  "components": 
  [
    {
      "input": false,
      "key": "mvn_FormPanelLayout_Pnl",
      "type": "panel",
      "class": "light-bg brdr-b-blue brdr-t-blue brdr-l-blue brdr-r-blue",
      
      "noPadding": true,
      "components":
       [
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient_Tbl",
     
          "numRows": 1,
          "numCols": 1,
          "rows":
           [
            [
              {
                "colspan":2,
                "components":
                 [
                  {
                    "input": true,
                    "key": "mvn_PatientName_Cnt",
                    "type": "content",
                    "html": "An individual or representative may change, once in each election period, the designation of the particular hospice from <br> which hospice care will be received:<br><br>The change of the designated hospice is not a revocation of the election for the period in which it is made.<br><br>To change the designation of hospice programs, the individual or representative must file, with the hospice from which<br>care has been received and with the newly designated hospice, a statement that includes the following information.<br>"
                  },
                  {
                    "type": "textfield",
                    "key": "M0040PatientName",
                    "label": "PatientName: ",
                    "enabled": true
                  },
                  {
                    "input": true,
                    "key": "mvn_PatientName1_Cnt",
                    "type": "content",
                    "html": "has received hospice care from"
                  },
                  {
                    "type": "textfield",
                    "key": "M0040AgenName",
                    "label": "&emsp;AgencyName: ",
                    "enabled": true
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient2_Tb2",
          
          "numRows": 1,
          "numCols": 1,
          "rows":
           [
            [
              {
                "colspan":2,
                "components":
                 [
                  {
                    "type": "textfield",
                    "key": "M0040PatientName2",
                    "label": "PatientName: ",
                    "enabled": true
                  },
                  {
                    "input": true,
                    "key": "mvn_PatientName2_Cnt",
                    "type": "content",
                    "html": "plans to receive hospice care from &emsp;&emsp;&emsp;"
                  },
                  {
                    "type": "textfield",
                    "key": "M0040AgenName2",
                    "label": " ",
                    "enabled": true
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient3_Tb3",
          
          "numRows": 1,
          "numCols": 1,
          "rows":
           [
            [
              {
                "colspan":2,
                "components":
                 [
                  {
                    "input": true,
                    "type": "datetime",
                    "key": "msv_NotifyDate_Txt",
                    "label": "The date the change is to be effective is:&nbsp;",
                    "datePicker": 
                    {
                      "minDate": null,
                      "maxDate": null
                    }
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient4_Tb4",
        
          "numRows": 1,
          "numCols": 1,
          "rows": 
          [
            [
              {
                "colspan":2,
                "components":
                 [
                  {
                    "type": "textfield",
                    "key": "M0040PatientName4",
                    "label": "",
                    "enabled": true
                  },
                  {
                  //  "class": "width-22",
                    "input": true,
                    "key": "mvn_PatientName4_Cnt",
                    "type": "content",
                   // "html": "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
                  },
                  {
                    "input": true,
                    "type": "datetime",
                    "key": "msv_Date2_Txt",
                    "label": " ",
                    "datePicker":
                     {
                      "minDate": null,
                      "maxDate": null
                     }
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient5_Tb5",
        
          "numRows": 1,
          "numCols": 2,
          "rows": 
          [
            [
              {
              // "colspan":2,
                "components": 
                [
                  {
                    "input": true,
                    "key": "mvn_PatientName5_Cnt",
                    "type": "content",
                    "html": "Patient/Representative Signature"
                  },
                  {
                    "colspan":2,
                    "input": true,
                    "key": "mvn_PatientName6_Cnt",
                    "type": "content",
                  //  "html": "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Date/Signed "
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient6_Tb6",
          
          "numRows": 1,
          "numCols": 2,
          "rows": 
          [
            [
              {
                "class": "width-50",
                "components": 
                [
                  {
                    "class": "width-50",
                    "type": "textfield",
                    "key": "M0040PatientName7",
                    "label": "",
                    "enabled": true
                  },
                  {
                    "colspan":2,
                    "input": true,
                    "key": "mvn_PatientName7_Cnt",
                    "type": "content",
                   //"html": "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
                  },
                  {
                    "colspan":2,
                    "input": true,
                    "type": "datetime",
                    "key": "msv_Date3_Txt",
                    "label": " ",
                    "datePicker": {
                      "minDate": null,
                      "maxDate": null
                    }
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "mvn_Patient7_Tb7",
         
          "numRows": 1,
          "numCols": 2,
          "rows":
           [
            [
              {
                //"colspan":2,
              //  "class": "width-50",
                "components":
                 [
                  {
                    "class": "width-50",
                    "input": true,
                    "key": "mvn_WitnessName9_Cnt",
                    "type": "content",
                    "html": "Witness Signature"
                  },
                  {
                    "colspan":2,
                    "input": true,
                    "key": "mvn_PatientName10_Cnt",
                    "type": "content",
                    //"html": "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Date/Signed "
                  }
                ]
              }
            ]
          ]
        }
      ]
    }
  ]
}