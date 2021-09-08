var formJson =
{
  "components":
   [
    {
      "input": false,
      "key": "mvn_FormPanelLayout_Pnl",
      "type": "panel",
      "class": " brdr-t-blue brdr-b-blue brdr-r-blue brdr-l-blue",
      "noPadding": true,
      "components":
       [
        {
          "input": false,
          "type": "table",
          "key": "vs_Vitalsigns1_Tbl",
          "border": false,
          "numRows": 6,
          "numCols": 2,
          "rows":
           [
            [  //one rows starts
              {   //columns
                "class": "width-34",
                "components":
                 [
                   {
                    "type": "textfield",
                    "key": "vs_Pul_Txt",
                    "label": "Pulse: "
                    },
                   
                    {
                    "type": "radio",
                    "key": "vs_MethodUsed1_Rdo",
                        "clearable": true,
                        "values":
                        [
                          {
                            "value": "0",
                            "label": "Apical"
                          },
                          {
                            "value": "1",
                            "label": "Radial"
                          }, 
                        ]
                    },
                    {
                      "type": "radio",
                      "key": "vs_MethodUsed2_Rdo",
                          "clearable": true,
                          "values":
                          [
                            {
                              "value": "2",
                              "label": "Regular"
                            },
                            {
                              "value": "3",
                              "label": "Irregular"
                            },
                            
                          ]
                      },
                     /* {
                        "key": "vs_Risks2_Cnt",
                        "type": "content",
                        "html": "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
                      },
                      {
                        "type": "textfield",
                        "key": "vs_SPO_Txt",
                        "label": "SPO2: "
                      },
                      {
                        "key": "vs_percent_Cnt",
                        "type": "content",
                        "html": "%"
                      }*/

                  ] 

            
              },

              {   //columns (i used column but without border)
               
                "components":
                 [
                  {
                    "key": "vs_Risks2_Cnt",
                    "type": "content",
                    "html": " "
                  },
                  {
                    "type": "textfield",
                    "key": "vs_SPO_Txt",
                    "label": "SPO2Sat: "
                  },
                  {
                    "key": "vs_percent_Cnt",
                    "type": "content",
                    "html": "%"
                  }
                 ]
              }

            ],//row end here
            [
              {   //columns
                "class": "width-34",
                "components":
                 [
                   {
                    "type": "textfield",
                    "key": "vs_Bp_Txt",
                    "label": "Blood Pressure: "
                    },
                    {
                      "type": "select",
                      "key": "vs_Pos_Opt",
                      "label": "Position",
                      "value": "",
                      "data": 
                      {
                          "values": 
                          [
                              {
                                  "value": "",
                                  "label": "Select"
                              },
                              {
                                  "value": "1",
                                  "label": "Home"
                              },
                              {
                                  "value": "2",
                                  "label": "Hospital"
                              },
                              {
                                  "value": "3",
                                  "label": "PHS"
                              },
                              {
                                  "value": "4",
                                  "label": "Physician's Office/Clinic"
                              },
                              {
                                  "value": "5",
                                  "label": "School"
                              },
                              {
                                  "value": "6",
                                  "label": "Phone"
                              },
                              {
                                  "value": "7",
                                  "label": "Telemedicine"
                              },
                              {
                                  "value": "8",
                                  "label": "Other"
                              }
                          ]
                      }
                   },
                   {
                                "type": "radio",
                                 "key": "vs_MethodUsed3_Rdo",
                                "clearable": true,
                                "values":
                                [
                                   {
                                      "value": "4",
                                       "label": "Left"
                                   },
                                   {
                                      "value": "5",
                                      "label": "Right"
                                    },
                                 ]
                   }

                  ]
              },

              {   //columns (i used column but without border)
               
                    "components":
                     [
                        {
                           "type": "textfield",
                            "key": "vs_PTINR_Txt",
                            "label": "PT/INR: "
                        },
                        {
                           "type": "radio",
                           "key": "vs_MethodUsed4_Rdo",
                           "clearable": true,
                           "values":
                             [
                                  {
                                      "value": "6",
                                       "label": "Venipuncture"
                                  },
                                   {
                                       "value": "7",
                                       "label": "FingerStick"
                                   },
                             ]
                         }
                  
                      ]
               }

            ],

            [
                  {   //columns
                         "colspan":2,
                         "components":
                           [
                               {
                                   "type": "textfield",
                                    "key": "vs_Tp_Txt",
                                    "label": "Temperature: "
                               },
                               {
                                     "key": "vs_deg_Cnt",
                                     "type": "content",
                                     "html": "degrees"
                               },
                               {
                                "type": "select",
                                "key": "vs_Pos2_Opt",
                                "label": "Method",
                                "value": "",
                                "data": 
                                {
                                    "values": 
                                    [
                                        {
                                            "value": "",
                                            "label": "Select"
                                        },
                                        {
                                            "value": "1",
                                            "label": "Home"
                                        },
                                        {
                                            "value": "2",
                                            "label": "Hospital"
                                        }  
                                    ]
                                 }
                               },
                               {
                                "type": "radio",
                                "key": "vs_MethodUsed5_Rdo",
                                "clearable": true,
                                "values":
                                  [
                                       {
                                           "value": "6",
                                            "label": "Fahrenheit"
                                       },
                                        {
                                            "value": "7",
                                            "label": "Celsius"
                                        },
                                  ]
                              }

                          ]
                   }

            ],
            [
              {   //columns
                "colspan":2,
                "components":
                 [
                   {
                    "type": "textfield",
                    "key": "vs_Rsp_Txt",
                    "label": "Respiration: "
                    },
                   
                    {
                    "type": "radio",
                    "key": "vs_MethodUsed6_Rdo",
                        "clearable": true,
                        "values":
                        [
                          {
                            "value": "8",
                            "label": "Regular"
                          },
                          {
                            "value": "9",
                            "label": "Irregular"
                          }, 
                        ]
                    }
                  ]
                }
            ],
            [
              {   //columns
                "colspan":2,
                "components":
                 [
                   {
                    "type": "textfield",
                    "key": "vs_Bs_Txt",
                    "label": "Blood Sugar: "
                    },

                    {
                      "key": "vs_Lit_Cnt",
                      "type": "content",
                      "html": "mg/dl"
                    },
                   
                    {
                    "type": "radio",
                    "key": "vs_MethodUsed7_Rdo",
                        "clearable": true,
                        "values":
                        [
                          {
                            "value": "10",
                            "label": "Actual"
                          },
                          {
                            "value": "11",
                            "label": "Reported"
                          }, 
                        ]
                    },

                    {
                      "type": "radio",
                      "key": "vs_MethodUsed8_Rdo",
                          "clearable": true,
                          "values":
                          [
                            {
                              "value": "0",
                              "label": "Random"
                            },
                            {
                              "value": "1",
                              "label": "Fasting"
                            }, 
                          ]
                    }
                  ]
                }  
            ],
            [
             {
              "colspan":2,
              "components": 
              [
                {
                  "type": "textfield",
                  "key": "vs_Pcsm_Txt",
                  "label": "Patient /CareGiver self monitoring: "
                 },
                {
                  "type": "checkbox",
                  "key": "hmo_Tmp_Chk",
                  "label": "Temp"
                },
                {
                  "type": "checkbox",
                  "key": "hmo_Pul_Chk",
                  "label": "Pulse"
                },
                {
                  "type": "checkbox",
                  "key": "hmo_Bp_Chk",
                  "label": "Bp"
                },
                {
                  "type": "checkbox",
                  "key": "hmo_Spo_Chk",
                  "label": "SPO2"
                },
                
              ]
             }
            ]

          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "vs_ VitalSigns2_Tb2",
          "border": false,
          "numRows": 2,
          "numCols": 2,
          "rows":
          [
            [
              {
                "class": "width-12",
                "components":
                [
                  {
                "key": "vs_Avsd_Cnt",
                "type": "content",
                "html": "Additional vital Sign Details"
                  }
                ]
              },
              {
                "components":
                [
                  {
                  "input": true,
                  "type": "textarea",
                  "height":"10px",
                  "key": "vs_Avs_Txt",
                  "label": ""
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