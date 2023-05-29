import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1590_19360} />
      <View style={styles.View_1595_18826}>
        <View style={styles.View_I1595_18826_882_1005}>
          <Text style={styles.Text_I1595_18826_882_1005}>Go Back</Text>
        </View>
      </View>
      <View style={styles.View_1595_18825}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb0486d5-6584-4e16-be73-e3243ffd4fd9"
          }}
          style={styles.ImageBackground_1590_19362}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26959a45-98f5-4d44-85c7-75f891d8d7bd"
          }}
          style={styles.ImageBackground_1590_19367}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8086001-e66a-4e2d-968d-c36872e79fae"
          }}
          style={styles.ImageBackground_1590_19397}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479945cf-c575-4dc5-b31a-7d8895ddd0bb"
          }}
          style={styles.ImageBackground_1590_19405}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a127000d-6ca2-466b-b2de-50394ed451a8"
          }}
          style={styles.ImageBackground_1590_19409}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5e20fff-a1c5-43c6-9ef0-babd6602344e"
          }}
          style={styles.ImageBackground_1590_19413}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f0d070d-c37c-4bc2-a675-f3750cdb48f4"
          }}
          style={styles.ImageBackground_1590_19462}
        />
        <View style={styles.View_1590_19465}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56c6b682-9d05-45bb-a28b-d71ade6aa7e1"
            }}
            style={styles.ImageBackground_1590_19466}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b11ea80-0f03-458c-a3ec-ffc4bd761f0a"
            }}
            style={styles.ImageBackground_1590_19467}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2176df60-0a1d-4df6-bd75-6b96fa2f2c8c"
            }}
            style={styles.ImageBackground_1590_19470}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad7d24e6-064c-4bca-a9c1-797c61962d92"
            }}
            style={styles.ImageBackground_1590_19471}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c1981e8-274b-4453-9c52-bb747fff8b80"
            }}
            style={styles.ImageBackground_1590_19472}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/796a6650-5ec8-497e-aca2-17e20b582a17"
            }}
            style={styles.ImageBackground_1590_19473}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9382d65e-cb9c-49b3-9755-4224790f2969"
            }}
            style={styles.ImageBackground_1590_19474}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1625d35e-f01f-4e49-a9e2-8cb9e5bd5f4f"
            }}
            style={styles.ImageBackground_1590_19475}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20e898ab-4ea4-4bb3-a2eb-f17579e46002"
            }}
            style={styles.ImageBackground_1590_19476}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27dc0358-1097-47f7-a61a-fd76ede08509"
            }}
            style={styles.ImageBackground_1590_19479}
          />
        </View>
        <View style={styles.View_1590_19648}>
          <View style={styles.View_1590_19649}>
            <View style={styles.View_1590_19650}>
              <View style={styles.View_1590_19651}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6c64154-0d8e-47b5-b9c0-62a6a6011b03"
                  }}
                  style={styles.ImageBackground_1590_19652}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58cc777f-c03e-4d54-ab56-c2ecf7765195"
                  }}
                  style={styles.ImageBackground_1590_19654}
                />
              </View>
            </View>
            <View style={styles.View_1590_19656}>
              <View style={styles.View_1590_19657}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a4b4a22-ce35-4e33-b8d1-a2ea30414ca0"
                  }}
                  style={styles.ImageBackground_1590_19658}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44b55b79-1959-497d-9923-35be96412ab9"
                  }}
                  style={styles.ImageBackground_1590_19660}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1590_19662}>
            <View style={styles.View_1590_19663}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f810dd2a-aad8-4d47-98f4-991b4826fa50"
                }}
                style={styles.ImageBackground_1590_19664}
              />
            </View>
            <View style={styles.View_1590_19666}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b87a8fbf-cf95-4fdb-8888-35b71eb611e0"
                }}
                style={styles.ImageBackground_1590_19667}
              />
            </View>
            <View style={styles.View_1590_19669}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1084c74-7630-46f7-aeb4-74dc915368f3"
                }}
                style={styles.ImageBackground_1590_19670}
              />
            </View>
            <View style={styles.View_1590_19672}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34b8755d-28a1-4fff-8eee-82c67d2ae962"
                }}
                style={styles.ImageBackground_1590_19673}
              />
            </View>
          </View>
          <View style={styles.View_1590_19675}>
            <View style={styles.View_1590_19676}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2f4e0fc-4cd4-4182-8879-d9c0b101a4e6"
                }}
                style={styles.ImageBackground_1590_19677}
              />
            </View>
            <View style={styles.View_1590_19679}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e90ff6f-76d4-4c80-95ce-96185f2aba8d"
                }}
                style={styles.ImageBackground_1590_19680}
              />
            </View>
            <View style={styles.View_1590_19682}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/240b584c-6c90-41b3-871c-9810b8ad3729"
                }}
                style={styles.ImageBackground_1590_19683}
              />
            </View>
            <View style={styles.View_1590_19685}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e243ed7c-3be4-416a-9e52-454f928d60cd"
                }}
                style={styles.ImageBackground_1590_19686}
              />
            </View>
            <View style={styles.View_1590_19688}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b32b5990-75f9-4c38-9aaf-78c5e392854e"
                }}
                style={styles.ImageBackground_1590_19689}
              />
            </View>
            <View style={styles.View_1590_19691}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc6c5c89-03ae-400b-90af-3996b2459a63"
                }}
                style={styles.ImageBackground_1590_19692}
              />
            </View>
          </View>
          <View style={styles.View_1590_19694}>
            <View style={styles.View_1590_19695}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bba26699-f8d6-4163-b141-a7dbc65a2ca2"
                }}
                style={styles.ImageBackground_1590_19696}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c58f362d-d4e6-4e50-9d55-92eabe573ca4"
                }}
                style={styles.ImageBackground_1590_19698}
              />
            </View>
            <View style={styles.View_1590_19700}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16e22767-6f37-43b6-8459-505f22aef251"
                }}
                style={styles.ImageBackground_1590_19701}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0262f743-c814-44a3-82aa-5d2c424634d5"
                }}
                style={styles.ImageBackground_1590_19703}
              />
            </View>
          </View>
          <View style={styles.View_1590_19705}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3e3df34-8ce7-4db2-8ee6-2eaec9ffa222"
              }}
              style={styles.ImageBackground_1590_19706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e387d1d-cf3c-42c6-9972-e968f6e448b5"
              }}
              style={styles.ImageBackground_1590_19708}
            />
          </View>
        </View>
        <View style={styles.View_1593_21351}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b14e5311-ab38-4379-a293-4a44161b6be0"
            }}
            style={styles.ImageBackground_1593_21352}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97b77e23-20b6-4443-8c45-a4c5fc564c08"
            }}
            style={styles.ImageBackground_1593_21353}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8233b41b-71b5-4970-bfe8-4a795665cef5"
            }}
            style={styles.ImageBackground_1593_21354}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e55a4d8-6c86-4f50-9546-624ff5a8bf8c"
            }}
            style={styles.ImageBackground_1593_21355}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1ecca06-e4d4-43ab-a9f4-5cbf96e0fe45"
            }}
            style={styles.ImageBackground_1593_21356}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45ed9946-1547-47f6-9890-98ca41c7cad3"
            }}
            style={styles.ImageBackground_1593_21357}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62de20b5-cb73-4dfa-93c8-348e07896c8a"
            }}
            style={styles.ImageBackground_1593_21358}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef9ca6e8-de97-4192-b4f5-fa4ac75cbf9e"
            }}
            style={styles.ImageBackground_1593_21359}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e20bc29e-7bff-4175-8584-55d9857433db"
            }}
            style={styles.ImageBackground_1593_21360}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5f83443-9668-45e8-8733-366089f626f6"
            }}
            style={styles.ImageBackground_1593_21364}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e857123-255c-464f-a8e9-189a05eec94b"
            }}
            style={styles.ImageBackground_1593_21365}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a58b7b0c-5238-4907-9059-5c427ed0eb8c"
            }}
            style={styles.ImageBackground_1593_21366}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72fbf189-73bb-46d6-9ff9-4d040a457964"
            }}
            style={styles.ImageBackground_1593_21367}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/299605b0-d3bc-4a26-8188-3455b440bac4"
            }}
            style={styles.ImageBackground_1593_21368}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aae6876f-6a29-4224-b03e-77fc85a8f007"
            }}
            style={styles.ImageBackground_1593_21369}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/373261d6-dfa4-46f4-b28c-3fe903af577c"
            }}
            style={styles.ImageBackground_1593_21370}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9646aa72-e826-4429-ad50-a61caa876498"
            }}
            style={styles.ImageBackground_1593_21371}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fabd57ba-9e51-45ae-a869-be62fe4b4247"
            }}
            style={styles.ImageBackground_1593_21372}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2829ffaf-6ef6-47b1-ba27-52b4d0f5ba5a"
            }}
            style={styles.ImageBackground_1593_21373}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af865dd1-8e3f-4029-a02c-eb39bc989016"
            }}
            style={styles.ImageBackground_1593_21374}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b80184f-dae5-4d65-b6f3-c36e7e99068e"
            }}
            style={styles.ImageBackground_1593_21375}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c3526ae-e1ef-45e7-bc4c-1fb063319e8c"
            }}
            style={styles.ImageBackground_1593_21376}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f313da80-eed5-4366-b11b-81030d2dbdce"
            }}
            style={styles.ImageBackground_1593_21377}
          />
          <View style={styles.View_1593_21378}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0955fba-96fb-4474-87a1-61982c3208ef"
              }}
              style={styles.ImageBackground_1593_21379}
            />
            <View style={styles.View_1593_21380} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27836263-4541-4128-beb8-e80f96d0b334"
              }}
              style={styles.ImageBackground_1593_21381}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb340ff2-abf5-4d9c-a0ca-8cf91a54d224"
              }}
              style={styles.ImageBackground_1593_21382}
            />
          </View>
        </View>
        <View style={styles.View_1593_21383}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71faefeb-6123-4162-a204-d91bb346a3ee"
            }}
            style={styles.ImageBackground_1593_21384}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be2fb590-39b2-498d-a783-664b524bb7ff"
            }}
            style={styles.ImageBackground_1593_21389}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/332b9a45-52ba-4a37-a2c2-452b1a4c3f85"
            }}
            style={styles.ImageBackground_1593_21392}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3219f22-85c9-40fa-a2ea-d2221f98a9e4"
            }}
            style={styles.ImageBackground_1593_21395}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a22fd97-1fbf-412f-b846-1933842d2029"
            }}
            style={styles.ImageBackground_1593_21405}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("148%") },
  View_1590_19360: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1595_18826: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("123%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  View_I1595_18826_882_1005: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1595_18826_882_1005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1595_18825: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("11%")
  },
  ImageBackground_1590_19362: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_1590_19367: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("91%")
  },
  ImageBackground_1590_19397: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("32%")
  },
  ImageBackground_1590_19405: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("30%")
  },
  ImageBackground_1590_19409: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("28%")
  },
  ImageBackground_1590_19413: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("30%")
  },
  ImageBackground_1590_19462: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("88%")
  },
  View_1590_19465: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("45%")
  },
  ImageBackground_1590_19466: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_1590_19467: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_1590_19470: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1590_19471: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_1590_19472: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("6%")
  },
  ImageBackground_1590_19473: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("38%")
  },
  ImageBackground_1590_19474: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("38%")
  },
  ImageBackground_1590_19475: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("40%")
  },
  ImageBackground_1590_19476: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_1590_19479: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  View_1590_19648: {
    width: wp("37%"),
    height: hp("69%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_1590_19649: {
    width: wp("34%"),
    height: hp("33%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19650: {
    width: wp("9%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19651: {
    width: wp("9%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19652: {
    width: wp("9%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19654: {
    width: wp("9%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19656: {
    width: wp("9%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_1590_19657: {
    width: wp("9%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19658: {
    width: wp("9%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19660: {
    width: wp("9%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19662: {
    width: wp("21%"),
    height: hp("62%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1590_19663: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19664: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19666: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1590_19667: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19669: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1590_19670: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19672: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_1590_19673: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19675: {
    width: wp("9%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_1590_19676: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19677: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19679: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1590_19680: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19682: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1590_19683: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19685: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1590_19686: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19688: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1590_19689: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19691: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1590_19692: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19694: {
    width: wp("35%"),
    height: hp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1590_19695: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19696: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19698: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19700: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_1590_19701: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19703: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1590_19705: {
    width: wp("14%"),
    height: hp("48%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1590_19706: {
    width: wp("13%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1590_19708: {
    width: wp("14%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1593_21351: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("52%")
  },
  ImageBackground_1593_21352: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("57%")
  },
  ImageBackground_1593_21353: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59%")
  },
  ImageBackground_1593_21354: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("45%")
  },
  ImageBackground_1593_21355: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("44%")
  },
  ImageBackground_1593_21356: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("58%")
  },
  ImageBackground_1593_21357: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("58%")
  },
  ImageBackground_1593_21358: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("33%")
  },
  ImageBackground_1593_21359: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("14%")
  },
  ImageBackground_1593_21360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%")
  },
  ImageBackground_1593_21364: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%")
  },
  ImageBackground_1593_21365: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%")
  },
  ImageBackground_1593_21366: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%")
  },
  ImageBackground_1593_21367: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_1593_21368: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_1593_21369: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%")
  },
  ImageBackground_1593_21370: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%")
  },
  ImageBackground_1593_21371: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  ImageBackground_1593_21372: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%")
  },
  ImageBackground_1593_21373: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  ImageBackground_1593_21374: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%")
  },
  ImageBackground_1593_21375: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%")
  },
  ImageBackground_1593_21376: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("37%")
  },
  ImageBackground_1593_21377: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("18%")
  },
  View_1593_21378: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  ImageBackground_1593_21379: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1593_21380: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(48, 44, 72, 1)"
  },
  ImageBackground_1593_21381: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_1593_21382: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_1593_21383: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%")
  },
  ImageBackground_1593_21384: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1593_21389: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  ImageBackground_1593_21392: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_1593_21395: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  ImageBackground_1593_21405: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
