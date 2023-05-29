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
      <View style={styles.View_1553_16435} />
      <View style={styles.View_1553_16436} />
      <View style={styles.View_1553_16437}>
        <View style={styles.View_1553_16438}>
          <Text style={styles.Text_1553_16438}>
            @ 2023 Bankco. All Right Reserved.{" "}
          </Text>
        </View>
        <View style={styles.View_1553_16439}>
          <View style={styles.View_1553_16440}>
            <Text style={styles.Text_1553_16440}>Terms &amp; Condition </Text>
          </View>
          <View style={styles.View_1553_16441}>
            <Text style={styles.Text_1553_16441}>Privacy Policy</Text>
          </View>
          <View style={styles.View_1553_16442}>
            <Text style={styles.Text_1553_16442}>Help</Text>
          </View>
          <View style={styles.View_1553_16443}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7809c64-829a-49ed-b2b2-38055e659ffd"
              }}
              style={styles.ImageBackground_1553_16444}
            />
            <View style={styles.View_1553_16445}>
              <Text style={styles.Text_1553_16445}>English</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1553_16446}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4857d843-aeff-4d54-856e-dee12480f0fa"
          }}
          style={styles.ImageBackground_1553_16447}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d09bff0-d845-4ef2-9105-1e6055f57ea6"
          }}
          style={styles.ImageBackground_1553_16448}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e00750ef-4b3b-4b97-ac30-2878619f1820"
          }}
          style={styles.ImageBackground_1553_16449}
        />
        <View style={styles.View_1553_16460}>
          <View style={styles.View_1553_16461} />
          <View style={styles.View_1553_16462}>
            <View style={styles.View_1553_16463} />
            <View style={styles.View_1553_16464} />
            <View style={styles.View_1553_16465} />
          </View>
        </View>
        <View style={styles.View_1553_16466}>
          <View style={styles.View_1553_16467} />
          <View style={styles.View_1553_16468} />
          <View style={styles.View_1553_16469} />
          <View style={styles.View_1553_16470} />
          <View style={styles.View_1553_16471}>
            <View style={styles.View_1553_16472} />
            <View style={styles.View_1553_16473} />
            <View style={styles.View_1553_16474} />
            <View style={styles.View_1553_16475} />
            <View style={styles.View_1553_16476} />
            <View style={styles.View_1553_16477} />
          </View>
        </View>
        <View style={styles.View_1553_16478}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cce0652-cebf-465e-bf7b-403169215ab8"
            }}
            style={styles.ImageBackground_1553_16479}
          />
          <View style={styles.View_1553_16480} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5110fe9c-2f07-478b-944c-f1fb38a8c51a"
            }}
            style={styles.ImageBackground_1553_16481}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a225c3c-6d36-4337-97ff-015bf91ac6b4"
            }}
            style={styles.ImageBackground_1553_16482}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/527707e3-62fd-4b14-b6db-b1ff0bc3cbba"
          }}
          style={styles.ImageBackground_1553_16483}
        />
        <View style={styles.View_1553_16488}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7568dc6-ea53-4ccf-82c5-3f687a039a64"
            }}
            style={styles.ImageBackground_1553_16489}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c08f090f-6eae-49ae-8c72-372cafecc384"
            }}
            style={styles.ImageBackground_1553_16497}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd343b19-20c6-46e1-9eef-3125e5112944"
            }}
            style={styles.ImageBackground_1553_16498}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8576655-3980-4a4b-b056-44b2310c9031"
            }}
            style={styles.ImageBackground_1553_16504}
          />
        </View>
        <View style={styles.View_1553_16505}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a66e6fff-1b13-42b7-8e85-8daaff7ea6fa"
            }}
            style={styles.ImageBackground_1553_16506}
          />
          <View style={styles.View_1553_16507} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ad60f7a-6ca6-4539-a6b9-9ae8aa90574d"
            }}
            style={styles.ImageBackground_1553_16508}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1382a69-047b-47a6-922d-866b06352bac"
            }}
            style={styles.ImageBackground_1553_16509}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd668fed-091d-4706-bc27-96ead20e46d2"
            }}
            style={styles.ImageBackground_1553_16588}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd7d26ab-4402-4c0b-8d05-1e84ea13c168"
            }}
            style={styles.ImageBackground_1553_16589}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a4e2140-e709-4e48-af64-722dd4cae352"
            }}
            style={styles.ImageBackground_1553_16590}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1080a70-be2c-46d2-977b-45002bd44064"
            }}
            style={styles.ImageBackground_1553_16591}
          />
        </View>
        <View style={styles.View_1553_16592}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ff2ccbb-20b5-4251-8ca2-9488a6d870e8"
            }}
            style={styles.ImageBackground_1553_16593}
          />
          <View style={styles.View_1553_16594} />
          <View style={styles.View_1553_16595} />
          <View style={styles.View_1553_16596} />
          <View style={styles.View_1553_16597} />
        </View>
        <View style={styles.View_1553_16598}>
          <View style={styles.View_1553_16599} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dc64861-db87-4afd-8557-3741925e0f96"
            }}
            style={styles.ImageBackground_1553_16600}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06def748-1610-482f-a7f4-b535387baf91"
            }}
            style={styles.ImageBackground_1553_16601}
          />
          <View style={styles.View_1553_16602} />
        </View>
        <View style={styles.View_1553_16603}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89283c07-c9f9-4602-a7b1-2da4d03468fc"
            }}
            style={styles.ImageBackground_1553_16604}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96486d19-3cd4-4ccb-8a2b-1c36edf2aa0c"
            }}
            style={styles.ImageBackground_1553_16605}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d50375cd-ac0b-4b22-a5bc-fcc0f96fd983"
            }}
            style={styles.ImageBackground_1553_16606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da663009-4f45-4817-aa26-fc6d1c3c6f47"
            }}
            style={styles.ImageBackground_1553_16607}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5034debe-3eb7-49fe-9882-17642db2f33a"
            }}
            style={styles.ImageBackground_1553_16610}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff1efc59-15aa-46eb-b773-d7ef76b6e0cb"
            }}
            style={styles.ImageBackground_1553_16611}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d46ac9c4-5bc2-4eb1-abae-256cbeef3815"
            }}
            style={styles.ImageBackground_1553_16612}
          />
        </View>
        <View style={styles.View_1553_16613}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0332aa2e-b7d2-4116-b1c2-ee3bec649457"
            }}
            style={styles.ImageBackground_1553_16614}
          />
          <View style={styles.View_1553_16615} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4c2c1eb-26e2-4bed-80aa-c07d27f86aa6"
            }}
            style={styles.ImageBackground_1553_16616}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/456c06be-2019-423c-a2ab-1478ab4e3112"
            }}
            style={styles.ImageBackground_1553_16617}
          />
        </View>
      </View>
      <View style={styles.View_1553_16618}>
        <View style={styles.View_1553_16619}>
          <View style={styles.View_1553_16620}>
            <Text style={styles.Text_1553_16620}>Speady, Easy and Fast</Text>
          </View>
          <View style={styles.View_1553_16621}>
            <Text style={styles.Text_1553_16621}>
              BankCo. help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </Text>
          </View>
        </View>
        <View style={styles.View_1553_16622}>
          <View style={styles.View_1553_16623} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f831896-1825-4964-a12d-a764ca9befea"
            }}
            style={styles.ImageBackground_1553_16624}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99576314-a9b6-454a-9070-0afdc7a65650"
            }}
            style={styles.ImageBackground_1553_16625}
          />
        </View>
      </View>
      <View style={styles.View_1553_16626}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8c1d65c-2dab-4de9-9839-d82e75f03126"
          }}
          style={styles.ImageBackground_1553_16627}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3000fdcc-da4f-496c-a939-1bedfb1637bf"
          }}
          style={styles.ImageBackground_1553_16628}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04e1c6a2-0e46-47d7-a7f2-cdb92eeb1d0e"
          }}
          style={styles.ImageBackground_1553_16629}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c1419cf-bc90-4cc5-8da6-984a4aa8db5d"
          }}
          style={styles.ImageBackground_1553_16630}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4574d966-a2a1-449f-905a-45e2377cc5ba"
          }}
          style={styles.ImageBackground_1553_16634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/502e9005-8496-4be7-b8f8-06f14633745b"
          }}
          style={styles.ImageBackground_1553_16635}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63200d07-71d5-4717-9a1d-0b48b39681f1"
          }}
          style={styles.ImageBackground_1553_16650}
        />
      </View>
      <View style={styles.View_1553_16651}>
        <View style={styles.View_1553_16652}>
          <View style={styles.View_1553_16653}>
            <Text style={styles.Text_1553_16653}>Sign in to Bankco.</Text>
          </View>
          <View style={styles.View_1553_16654}>
            <Text style={styles.Text_1553_16654}>
              Send, spend and save smarter
            </Text>
          </View>
        </View>
        <View style={styles.View_1553_16655}>
          <View style={styles.View_1553_16656}>
            <View style={styles.View_I1553_16656_822_51}>
              <Text style={styles.Text_I1553_16656_822_51}>
                admin@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.View_1553_16657}>
            <View style={styles.View_I1553_16657_822_59}>
              <Text style={styles.Text_I1553_16657_822_59}>**************</Text>
            </View>
            <View style={styles.View_I1553_16657_822_68}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c441935-6d80-4533-afd6-c0ec045665e3"
                }}
                style={styles.ImageBackground_I1553_16657_822_68_422_147}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1553_16658}>
          <View style={styles.View_I1553_16658_822_47}>
            <Text style={styles.Text_I1553_16658_822_47}>Sign In</Text>
          </View>
        </View>
        <View style={styles.View_1553_16659}>
          <View style={styles.View_1553_16660}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e510e67-d682-433b-802c-91b92b6fc6d0"
              }}
              style={styles.ImageBackground_I1553_16660_822_174}
            />
            <View style={styles.View_I1553_16660_822_161}>
              <Text style={styles.Text_I1553_16660_822_161}>
                Sign In with Google
              </Text>
            </View>
          </View>
          <View style={styles.View_1553_16661}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50e17a25-5b0a-435b-9b9c-5a7ff92f91c0"
              }}
              style={styles.ImageBackground_1553_16662}
            />
            <View style={styles.View_1553_16663}>
              <Text style={styles.Text_1553_16663}>Sign In with Apple</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1553_16664}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0216f8b4-fb25-4294-ae1f-34a321a95b52"
            }}
            style={styles.ImageBackground_1553_16665}
          />
          <View style={styles.View_1553_16666}>
            <Text style={styles.Text_1553_16666}>Or with email</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eb59022-37b7-41cf-b1ff-bdf97f90f4f8"
            }}
            style={styles.ImageBackground_1553_16667}
          />
        </View>
        <View style={styles.View_1553_16668}>
          <View style={styles.View_1553_16669}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/feedc5e7-4b6d-4a18-a857-e440f35f0aa2"
              }}
              style={styles.ImageBackground_1553_16670}
            />
            <View style={styles.View_1553_16671}>
              <Text style={styles.Text_1553_16671}>Remember me</Text>
            </View>
          </View>
          <View style={styles.View_1553_16672}>
            <Text style={styles.Text_1553_16672}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.View_1553_16673}>
          <Text style={styles.Text_1553_16673}>
            Don’t have an account? Sign Up
          </Text>
        </View>
      </View>
      <View style={styles.View_1553_16674}>
        <View style={styles.View_1553_16675} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0ba2a50-51f9-4e6b-8d66-37fd7ab32951"
          }}
          style={styles.ImageBackground_1553_16676}
        />
        <View style={styles.View_1553_16679}>
          <Text style={styles.Text_1553_16679}>BankCo.</Text>
        </View>
      </View>
      <View style={styles.View_1553_16680} />
      <View style={styles.View_1553_16681}>
        <View style={styles.View_1553_16682}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0eeb5ab-9dec-4e82-83f5-1464283a6f5e"
            }}
            style={styles.ImageBackground_1553_16683}
          />
        </View>
        <View style={styles.View_1553_16684}>
          <View style={styles.View_1553_16685}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7cb9b82-fbe8-4fba-9e0a-29e0a1b10766"
              }}
              style={styles.ImageBackground_1553_16686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59ec13e8-ec05-4216-8b42-20d1ad392f85"
              }}
              style={styles.ImageBackground_1553_16689}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c5453d2-30ca-4136-95ae-58ee0b16c57f"
              }}
              style={styles.ImageBackground_1553_16690}
            />
          </View>
          <View style={styles.View_1553_16691}>
            <View style={styles.View_1553_16692}>
              <View style={styles.View_1553_16693}>
                <View style={styles.View_1553_16694}>
                  <Text style={styles.Text_1553_16694}>
                    Enter verification code
                  </Text>
                </View>
                <View style={styles.View_1553_16695}>
                  <Text style={styles.Text_1553_16695}>
                    We have just sent a verification code to ajoy*****@mail.com
                  </Text>
                </View>
              </View>
              <View style={styles.View_1553_16696}>
                <View style={styles.View_1553_16697}>
                  <View style={styles.View_I1553_16697_822_521}>
                    <Text style={styles.Text_I1553_16697_822_521}>5</Text>
                  </View>
                </View>
                <View style={styles.View_1553_16698}>
                  <View style={styles.View_I1553_16698_822_521}>
                    <Text style={styles.Text_I1553_16698_822_521}>2</Text>
                  </View>
                </View>
                <View style={styles.View_1553_16699}>
                  <View style={styles.View_I1553_16699_822_521}>
                    <Text style={styles.Text_I1553_16699_822_521}>5</Text>
                  </View>
                </View>
                <View style={styles.View_1553_16700} />
                <View style={styles.View_1553_16701} />
              </View>
              <View style={styles.View_1553_16702}>
                <Text style={styles.Text_1553_16702}>Send the code again</Text>
              </View>
            </View>
            <View style={styles.View_1553_16703}>
              <View style={styles.View_I1553_16703_882_998}>
                <Text style={styles.Text_I1553_16703_882_998}>Verify</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("148%") },
  View_1553_16435: {
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
  View_1553_16436: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 250, 255, 1)"
  },
  View_1553_16437: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("129%")
  },
  View_1553_16438: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1553_16438: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16439: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1553_16440: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16440: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16441: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16441: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16442: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16442: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  ImageBackground_1553_16444: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1553_16445: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16445: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16446: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("18%")
  },
  ImageBackground_1553_16447: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  ImageBackground_1553_16448: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  ImageBackground_1553_16449: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_1553_16460: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("42%")
  },
  View_1553_16461: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(183, 200, 255, 1)",
    borderWidth: 1
  },
  View_1553_16462: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_1553_16463: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16464: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16465: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16466: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("47%")
  },
  View_1553_16467: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16468: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%"),
    backgroundColor: "rgba(183, 200, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16469: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%"),
    backgroundColor: "rgba(253, 194, 192, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16470: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    backgroundColor: "rgba(180, 204, 237, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16471: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_1553_16472: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16473: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16474: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16475: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16476: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16477: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_1553_16478: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("59%")
  },
  ImageBackground_1553_16479: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1553_16480: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8.75,
    borderTopRightRadius: 8.75,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1553_16481: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_1553_16482: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_1553_16483: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  View_1553_16488: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("41%")
  },
  ImageBackground_1553_16489: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_1553_16497: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  ImageBackground_1553_16498: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%")
  },
  ImageBackground_1553_16504: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%")
  },
  View_1553_16505: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49%")
  },
  ImageBackground_1553_16506: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_1553_16507: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1553_16508: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  ImageBackground_1553_16509: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_1553_16588: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  ImageBackground_1553_16589: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_1553_16590: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_1553_16591: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%")
  },
  View_1553_16592: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%")
  },
  ImageBackground_1553_16593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1553_16594: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_1553_16595: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16596: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16597: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16598: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%")
  },
  View_1553_16599: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1553_16600: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  ImageBackground_1553_16601: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  View_1553_16602: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1553_16603: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("47%")
  },
  ImageBackground_1553_16604: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%")
  },
  ImageBackground_1553_16605: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("24%")
  },
  ImageBackground_1553_16606: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1553_16607: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%")
  },
  ImageBackground_1553_16610: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%")
  },
  ImageBackground_1553_16611: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%")
  },
  ImageBackground_1553_16612: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_1553_16613: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("25%")
  },
  ImageBackground_1553_16614: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1553_16615: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8.75,
    borderTopRightRadius: 8.75,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1553_16616: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_1553_16617: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_1553_16618: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16619: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16620: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16620: {
    color: "rgba(35, 43, 56, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16621: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1553_16621: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16622: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16623: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  ImageBackground_1553_16624: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_1553_16625: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_1553_16626: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("138%"),
    minHeight: hp("138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("5%")
  },
  ImageBackground_1553_16627: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1553_16628: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_1553_16629: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_1553_16630: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1553_16634: {
    width: wp("5%"),
    height: hp("14%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_1553_16635: {
    width: wp("1%"),
    height: hp("19%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_1553_16650: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1553_16651: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("31%")
  },
  View_1553_16652: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16653: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16653: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16654: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1553_16654: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16655: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16656: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1553_16656_822_51: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16656_822_51: {
    color: "rgba(35, 43, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16657: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1553_16657_822_59: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16657_822_59: {
    color: "rgba(35, 43, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1553_16657_822_68: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1553_16657_822_68_422_147: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1553_16658: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  View_I1553_16658_822_47: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16658_822_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16659: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16660: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1553_16660_822_174: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_I1553_16660_822_161: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16660_822_161: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16661: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1553_16662: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_1553_16663: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1553_16663: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16664: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1553_16665: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_1553_16666: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16666: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1553_16667: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%")
  },
  View_1553_16668: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16669: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1553_16670: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1553_16671: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1553_16671: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16672: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1553_16672: {
    color: "rgba(34, 197, 94, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16673: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("74%"),
    justifyContent: "center"
  },
  Text_1553_16673: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16674: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  View_1553_16675: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_1553_16676: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1553_16679: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1553_16679: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.96,
    textTransform: "none"
  },
  View_1553_16680: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 32, 44, 1)"
  },
  View_1553_16681: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1553_16682: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1553_16683: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_1553_16684: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16685: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1553_16686: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1553_16689: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1553_16690: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1553_16691: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16692: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16693: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16694: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1553_16694: {
    color: "rgba(4, 9, 30, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16695: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1553_16695: {
    color: "rgba(116, 118, 129, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16696: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16697: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_I1553_16697_822_521: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16697_822_521: {
    color: "rgba(4, 9, 30, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16698: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_I1553_16698_822_521: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16698_822_521: {
    color: "rgba(4, 9, 30, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16699: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_I1553_16699_822_521: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16699_822_521: {
    color: "rgba(4, 9, 30, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16700: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1553_16701: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_1553_16702: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_1553_16702: {
    color: "rgba(34, 197, 94, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16703: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  View_I1553_16703_882_998: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16703_882_998: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
