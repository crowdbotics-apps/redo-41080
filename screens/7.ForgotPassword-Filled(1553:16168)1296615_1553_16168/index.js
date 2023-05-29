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
      <View style={styles.View_1557_17806}>
        <View style={styles.View_1553_16169} />
        <View style={styles.View_1553_16170} />
      </View>
      <View style={styles.View_1553_16171}>
        <View style={styles.View_1553_16172}>
          <Text style={styles.Text_1553_16172}>
            @ 2023 Bankco. All Right Reserved.{" "}
          </Text>
        </View>
        <View style={styles.View_1553_16173}>
          <View style={styles.View_1553_16174}>
            <Text style={styles.Text_1553_16174}>Terms &amp; Condition </Text>
          </View>
          <View style={styles.View_1553_16175}>
            <Text style={styles.Text_1553_16175}>Privacy Policy</Text>
          </View>
          <View style={styles.View_1553_16176}>
            <Text style={styles.Text_1553_16176}>Help</Text>
          </View>
          <View style={styles.View_1553_16177}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64e33ee9-8669-4d0d-a8af-38fa85fba9a3"
              }}
              style={styles.ImageBackground_1553_16178}
            />
            <View style={styles.View_1553_16179}>
              <Text style={styles.Text_1553_16179}>English</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1553_16180}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/404f3403-d15d-4cee-8717-64cea45f0b84"
          }}
          style={styles.ImageBackground_1553_16181}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97cf7b14-6557-4447-8be2-f916cd83267a"
          }}
          style={styles.ImageBackground_1553_16182}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbae1136-43eb-43dc-8619-c0c2d4f6b624"
          }}
          style={styles.ImageBackground_1553_16183}
        />
        <View style={styles.View_1553_16194}>
          <View style={styles.View_1553_16195} />
          <View style={styles.View_1553_16196}>
            <View style={styles.View_1553_16197} />
            <View style={styles.View_1553_16198} />
            <View style={styles.View_1553_16199} />
          </View>
        </View>
        <View style={styles.View_1553_16200}>
          <View style={styles.View_1553_16201} />
          <View style={styles.View_1553_16202} />
          <View style={styles.View_1553_16203} />
          <View style={styles.View_1553_16204} />
          <View style={styles.View_1553_16205}>
            <View style={styles.View_1553_16206} />
            <View style={styles.View_1553_16207} />
            <View style={styles.View_1553_16208} />
            <View style={styles.View_1553_16209} />
            <View style={styles.View_1553_16210} />
            <View style={styles.View_1553_16211} />
          </View>
        </View>
        <View style={styles.View_1553_16212}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba6c8e6f-d27a-48bf-ada9-f7d10721a3aa"
            }}
            style={styles.ImageBackground_1553_16213}
          />
          <View style={styles.View_1553_16214} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49c83765-ee3f-4d00-9a05-6fa202574587"
            }}
            style={styles.ImageBackground_1553_16215}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ffee84f-06fa-41f7-ba44-4f2ac07084bc"
            }}
            style={styles.ImageBackground_1553_16216}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b339de69-5489-43d6-b5ed-6bc94da23c68"
          }}
          style={styles.ImageBackground_1553_16217}
        />
        <View style={styles.View_1553_16222}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1823b2f3-8450-490a-8fc1-e052ccd5a133"
            }}
            style={styles.ImageBackground_1553_16223}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c314cc3-7eff-49f3-bba5-68a0dce47c4c"
            }}
            style={styles.ImageBackground_1553_16231}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9300948d-facb-4754-b017-3e38fa976d65"
            }}
            style={styles.ImageBackground_1553_16232}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1dc7ce9-520f-40cb-bb90-8f1413c9f095"
            }}
            style={styles.ImageBackground_1553_16238}
          />
        </View>
        <View style={styles.View_1553_16239}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fac476a-e13c-4fae-961a-dcc7f0372a2d"
            }}
            style={styles.ImageBackground_1553_16240}
          />
          <View style={styles.View_1553_16241} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12b2e349-9690-4dd6-b063-5a71ad22891d"
            }}
            style={styles.ImageBackground_1553_16242}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c39af0c4-e0e9-4c93-8713-66c1a4de0f31"
            }}
            style={styles.ImageBackground_1553_16243}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7f6cc4a-5086-4b8b-b6be-5a257a393745"
            }}
            style={styles.ImageBackground_1553_16322}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd826b88-25f7-4a0f-a70e-5bdbd71476f1"
            }}
            style={styles.ImageBackground_1553_16323}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0a19beb-9bc7-49a1-a724-bda381cddddb"
            }}
            style={styles.ImageBackground_1553_16324}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28b8549c-ea45-4ff0-be97-74bc1ea96f45"
            }}
            style={styles.ImageBackground_1553_16325}
          />
        </View>
        <View style={styles.View_1553_16326}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c38348dc-db03-44bf-b30a-0e8951c47ee5"
            }}
            style={styles.ImageBackground_1553_16327}
          />
          <View style={styles.View_1553_16328} />
          <View style={styles.View_1553_16329} />
          <View style={styles.View_1553_16330} />
          <View style={styles.View_1553_16331} />
        </View>
        <View style={styles.View_1553_16332}>
          <View style={styles.View_1553_16333} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff800625-5080-4f7d-a698-6aa2476cbb01"
            }}
            style={styles.ImageBackground_1553_16334}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e35049ca-93ef-4f91-9b43-46acb47e755f"
            }}
            style={styles.ImageBackground_1553_16335}
          />
          <View style={styles.View_1553_16336} />
        </View>
        <View style={styles.View_1553_16337}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5442929-8960-4150-9867-d4c41395f22f"
            }}
            style={styles.ImageBackground_1553_16338}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5003191e-bc9c-4665-910e-3ef347349a07"
            }}
            style={styles.ImageBackground_1553_16339}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21a96501-c9a1-4dcd-9ed1-26eb01b76564"
            }}
            style={styles.ImageBackground_1553_16340}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcde20b5-bb3e-4508-87ff-1fadbd098e98"
            }}
            style={styles.ImageBackground_1553_16341}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4807e06-f440-443e-9983-91c25bd5249e"
            }}
            style={styles.ImageBackground_1553_16344}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f460540-e346-460f-be77-e1878acd06ae"
            }}
            style={styles.ImageBackground_1553_16345}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cdf8b25-f205-48a6-83fa-b7dd391ec621"
            }}
            style={styles.ImageBackground_1553_16346}
          />
        </View>
        <View style={styles.View_1553_16347}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7198e00-f379-4c96-b822-b9f48a9358c1"
            }}
            style={styles.ImageBackground_1553_16348}
          />
          <View style={styles.View_1553_16349} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0cde4ca-0fac-4b50-b3d3-b98d35db7c75"
            }}
            style={styles.ImageBackground_1553_16350}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72826bda-3f2b-4047-9874-4ef4dd104a7d"
            }}
            style={styles.ImageBackground_1553_16351}
          />
        </View>
      </View>
      <View style={styles.View_1553_16352}>
        <View style={styles.View_1553_16353}>
          <View style={styles.View_1553_16354}>
            <Text style={styles.Text_1553_16354}>Speady, Easy and Fast</Text>
          </View>
          <View style={styles.View_1553_16355}>
            <Text style={styles.Text_1553_16355}>
              BankCo. help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus when you receive qualifying direct deposits
            </Text>
          </View>
        </View>
        <View style={styles.View_1553_16356}>
          <View style={styles.View_1553_16357} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23a80938-ce44-48ad-a453-003589e58334"
            }}
            style={styles.ImageBackground_1553_16358}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73b5d3f1-260a-4d15-af03-c5409eb1338b"
            }}
            style={styles.ImageBackground_1553_16359}
          />
        </View>
      </View>
      <View style={styles.View_1553_16360}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e3f9db4-7525-46bc-b198-ae7b155b4f31"
          }}
          style={styles.ImageBackground_1553_16361}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69c9bad1-a985-4e7c-8704-67bcbe9b12d1"
          }}
          style={styles.ImageBackground_1553_16362}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bf1e8de-fed1-467c-b439-4cab2f535b3c"
          }}
          style={styles.ImageBackground_1553_16363}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0593831-d9a7-47a7-a6d8-d8c4639a8ff2"
          }}
          style={styles.ImageBackground_1553_16364}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bd3d8f4-bfbe-4915-9823-e79e3ea108f8"
          }}
          style={styles.ImageBackground_1553_16368}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa643c9d-3b4c-437c-9a62-2220d1873a87"
          }}
          style={styles.ImageBackground_1553_16369}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10d79351-c47a-45ad-a9ff-292e6f334755"
          }}
          style={styles.ImageBackground_1553_16384}
        />
      </View>
      <View style={styles.View_1553_16385}>
        <View style={styles.View_1553_16386}>
          <View style={styles.View_1553_16387}>
            <Text style={styles.Text_1553_16387}>Sign in to Bankco.</Text>
          </View>
          <View style={styles.View_1553_16388}>
            <Text style={styles.Text_1553_16388}>
              Send, spend and save smarter
            </Text>
          </View>
        </View>
        <View style={styles.View_1553_16389}>
          <View style={styles.View_1553_16390}>
            <View style={styles.View_I1553_16390_822_51}>
              <Text style={styles.Text_I1553_16390_822_51}>
                admin@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.View_1553_16391}>
            <View style={styles.View_I1553_16391_822_59}>
              <Text style={styles.Text_I1553_16391_822_59}>**************</Text>
            </View>
            <View style={styles.View_I1553_16391_822_68}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bedbe51a-34c8-42f6-8686-0587587a2bd0"
                }}
                style={styles.ImageBackground_I1553_16391_822_68_422_147}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1553_16392}>
          <View style={styles.View_I1553_16392_822_47}>
            <Text style={styles.Text_I1553_16392_822_47}>Sign In</Text>
          </View>
        </View>
        <View style={styles.View_1553_16393}>
          <View style={styles.View_1553_16394}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d35dd3bb-9a27-4cb5-b1b4-19080efc3815"
              }}
              style={styles.ImageBackground_I1553_16394_822_174}
            />
            <View style={styles.View_I1553_16394_822_161}>
              <Text style={styles.Text_I1553_16394_822_161}>
                Sign In with Google
              </Text>
            </View>
          </View>
          <View style={styles.View_1553_16395}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dbcee9c-1098-45c9-851e-3939cc768ba4"
              }}
              style={styles.ImageBackground_1553_16396}
            />
            <View style={styles.View_1553_16397}>
              <Text style={styles.Text_1553_16397}>Sign In with Apple</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1553_16398}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea67e173-e819-4748-a2f7-e327a57b2422"
            }}
            style={styles.ImageBackground_1553_16399}
          />
          <View style={styles.View_1553_16400}>
            <Text style={styles.Text_1553_16400}>Or with email</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/089e3f58-0042-40a2-a802-3f3631a18629"
            }}
            style={styles.ImageBackground_1553_16401}
          />
        </View>
        <View style={styles.View_1553_16402}>
          <View style={styles.View_1553_16403}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bedba641-8a88-45ae-8d24-1fa780b3e80c"
              }}
              style={styles.ImageBackground_1553_16404}
            />
            <View style={styles.View_1553_16405}>
              <Text style={styles.Text_1553_16405}>Remember me</Text>
            </View>
          </View>
          <View style={styles.View_1553_16406}>
            <Text style={styles.Text_1553_16406}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.View_1553_16407}>
          <Text style={styles.Text_1553_16407}>
            Don’t have an account? Sign Up
          </Text>
        </View>
      </View>
      <View style={styles.View_1553_16408}>
        <View style={styles.View_1553_16409} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12432113-2ca2-48f4-9d78-b1cab732fa89"
          }}
          style={styles.ImageBackground_1553_16410}
        />
        <View style={styles.View_1553_16413}>
          <Text style={styles.Text_1553_16413}>BankCo.</Text>
        </View>
      </View>
      <View style={styles.View_1553_16414} />
      <View style={styles.View_1553_16415}>
        <View style={styles.View_1553_16416}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56a0be3a-a1aa-41d1-a218-dc8aacdd32a6"
            }}
            style={styles.ImageBackground_1553_16417}
          />
        </View>
        <View style={styles.View_1553_16418}>
          <View style={styles.View_1553_16419}>
            <View style={styles.View_1553_16420} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff99234e-b809-47ee-b26d-8777a7cd6b4f"
              }}
              style={styles.ImageBackground_1553_16421}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d27ee71-b1ab-4adb-8bd9-c2ea11f4ce7c"
              }}
              style={styles.ImageBackground_1553_16424}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b8d65d3-7236-4f55-bbbb-431c9fdaf6bb"
              }}
              style={styles.ImageBackground_1553_16425}
            />
          </View>
          <View style={styles.View_1553_16426}>
            <View style={styles.View_1553_16427}>
              <View style={styles.View_1553_16428}>
                <View style={styles.View_1553_16429}>
                  <Text style={styles.Text_1553_16429}>
                    Reset your password
                  </Text>
                </View>
                <View style={styles.View_1553_16430}>
                  <Text style={styles.Text_1553_16430}>
                    Enter the email address associated with your account and
                    we&#39;ll send you a link to reset your password.
                  </Text>
                </View>
              </View>
              <View style={styles.View_1553_16431}>
                <View style={styles.View_I1553_16431_822_51}>
                  <Text style={styles.Text_I1553_16431_822_51}>
                    ajoysarker@gmail.com
                  </Text>
                </View>
              </View>
              <View style={styles.View_1553_16432}>
                <Text style={styles.Text_1553_16432}>Return to login</Text>
              </View>
            </View>
            <View style={styles.View_1553_16433}>
              <View style={styles.View_I1553_16433_882_998}>
                <Text style={styles.Text_I1553_16433_882_998}>Continue</Text>
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
  View_1557_17806: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1553_16169: {
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
  View_1553_16170: {
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
  View_1553_16171: {
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
  View_1553_16172: {
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
  Text_1553_16172: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16173: {
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
  View_1553_16174: {
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
  Text_1553_16174: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16175: {
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
  Text_1553_16175: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16176: {
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
  Text_1553_16176: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16177: {
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
  ImageBackground_1553_16178: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1553_16179: {
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
  Text_1553_16179: {
    color: "rgba(42, 49, 60, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16180: {
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
  ImageBackground_1553_16181: {
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
  ImageBackground_1553_16182: {
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
  ImageBackground_1553_16183: {
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
  View_1553_16194: {
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
  View_1553_16195: {
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
  View_1553_16196: {
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
  View_1553_16197: {
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
  View_1553_16198: {
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
  View_1553_16199: {
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
  View_1553_16200: {
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
  View_1553_16201: {
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
  View_1553_16202: {
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
  View_1553_16203: {
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
  View_1553_16204: {
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
  View_1553_16205: {
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
  View_1553_16206: {
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
  View_1553_16207: {
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
  View_1553_16208: {
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
  View_1553_16209: {
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
  View_1553_16210: {
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
  View_1553_16211: {
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
  View_1553_16212: {
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
  ImageBackground_1553_16213: {
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
  View_1553_16214: {
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
  ImageBackground_1553_16215: {
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
  ImageBackground_1553_16216: {
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
  ImageBackground_1553_16217: {
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
  View_1553_16222: {
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
  ImageBackground_1553_16223: {
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
  ImageBackground_1553_16231: {
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
  ImageBackground_1553_16232: {
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
  ImageBackground_1553_16238: {
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
  View_1553_16239: {
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
  ImageBackground_1553_16240: {
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
  View_1553_16241: {
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
  ImageBackground_1553_16242: {
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
  ImageBackground_1553_16243: {
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
  ImageBackground_1553_16322: {
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
  ImageBackground_1553_16323: {
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
  ImageBackground_1553_16324: {
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
  ImageBackground_1553_16325: {
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
  View_1553_16326: {
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
  ImageBackground_1553_16327: {
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
  View_1553_16328: {
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
  View_1553_16329: {
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
  View_1553_16330: {
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
  View_1553_16331: {
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
  View_1553_16332: {
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
  View_1553_16333: {
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
  ImageBackground_1553_16334: {
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
  ImageBackground_1553_16335: {
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
  View_1553_16336: {
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
  View_1553_16337: {
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
  ImageBackground_1553_16338: {
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
  ImageBackground_1553_16339: {
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
  ImageBackground_1553_16340: {
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
  ImageBackground_1553_16341: {
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
  ImageBackground_1553_16344: {
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
  ImageBackground_1553_16345: {
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
  ImageBackground_1553_16346: {
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
  View_1553_16347: {
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
  ImageBackground_1553_16348: {
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
  View_1553_16349: {
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
  ImageBackground_1553_16350: {
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
  ImageBackground_1553_16351: {
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
  View_1553_16352: {
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
  View_1553_16353: {
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
  View_1553_16354: {
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
  Text_1553_16354: {
    color: "rgba(35, 43, 56, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16355: {
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
  Text_1553_16355: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16356: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16357: {
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
  ImageBackground_1553_16358: {
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
  ImageBackground_1553_16359: {
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
  View_1553_16360: {
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
  ImageBackground_1553_16361: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1553_16362: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_1553_16363: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_1553_16364: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1553_16368: {
    width: wp("5%"),
    height: hp("14%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_1553_16369: {
    width: wp("1%"),
    height: hp("19%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_1553_16384: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1553_16385: {
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
  View_1553_16386: {
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
  View_1553_16387: {
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
  Text_1553_16387: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16388: {
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
  Text_1553_16388: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16389: {
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
  View_1553_16390: {
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
  View_I1553_16390_822_51: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16390_822_51: {
    color: "rgba(35, 43, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16391: {
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
  View_I1553_16391_822_59: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16391_822_59: {
    color: "rgba(35, 43, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1553_16391_822_68: {
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
  ImageBackground_I1553_16391_822_68_422_147: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1553_16392: {
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
  View_I1553_16392_822_47: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16392_822_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16393: {
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
  View_1553_16394: {
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
  ImageBackground_I1553_16394_822_174: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_I1553_16394_822_161: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16394_822_161: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16395: {
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
  ImageBackground_1553_16396: {
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
  View_1553_16397: {
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
  Text_1553_16397: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16398: {
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
  ImageBackground_1553_16399: {
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
  View_1553_16400: {
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
  Text_1553_16400: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1553_16401: {
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
  View_1553_16402: {
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
  View_1553_16403: {
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
  ImageBackground_1553_16404: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1553_16405: {
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
  Text_1553_16405: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16406: {
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
  Text_1553_16406: {
    color: "rgba(34, 197, 94, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16407: {
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
  Text_1553_16407: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16408: {
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
  View_1553_16409: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_1553_16410: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1553_16413: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1553_16413: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.96,
    textTransform: "none"
  },
  View_1553_16414: {
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
  View_1553_16415: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("40%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1553_16416: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1553_16417: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_1553_16418: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16419: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1553_16420: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_1553_16421: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1553_16424: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1553_16425: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1553_16426: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16427: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16428: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1553_16429: {
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
  Text_1553_16429: {
    color: "rgba(4, 9, 30, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1553_16430: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1553_16430: {
    color: "rgba(116, 118, 129, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16431: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_I1553_16431_822_51: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16431_822_51: {
    color: "rgba(116, 118, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16432: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_1553_16432: {
    color: "rgba(34, 197, 94, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1553_16433: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  View_I1553_16433_882_998: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1553_16433_882_998: {
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
