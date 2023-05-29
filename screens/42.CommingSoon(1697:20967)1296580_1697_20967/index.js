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
      <View style={styles.View_1699_21554}>
        <View style={styles.View_1699_21555} />
        <View style={styles.View_1699_21982}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c55aba8e-54d5-48dc-930c-d261462178cd"
            }}
            style={styles.ImageBackground_1699_21983}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f77b072c-c26e-4cdd-9cd2-5039ba3835ce"
            }}
            style={styles.ImageBackground_1699_21990}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b03f71b6-bb77-4505-89d8-6cfa01c8dadd"
            }}
            style={styles.ImageBackground_1699_21993}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45c5b257-7e27-4cd5-af27-97d4321efd8d"
            }}
            style={styles.ImageBackground_1699_21996}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8a662d9-3e4b-4522-925a-78d2b001b29b"
            }}
            style={styles.ImageBackground_1699_21998}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7de0296-08bc-4871-9912-1ae8a80d8678"
            }}
            style={styles.ImageBackground_1699_22006}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56edd1a5-3ce7-494f-95aa-a84bf5ccbfdf"
            }}
            style={styles.ImageBackground_1699_22009}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83cb3571-bbf4-4b7d-b0e6-0de517f9924e"
            }}
            style={styles.ImageBackground_1699_22015}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b03c1d50-661f-4bfd-8635-cdb58dc78ce6"
            }}
            style={styles.ImageBackground_1699_22019}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f875e8cd-32f7-4493-ac8b-d8a60ab27443"
            }}
            style={styles.ImageBackground_1699_22023}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b09d158-8915-4bfd-8c26-77bafe0b07d7"
          }}
          style={styles.ImageBackground_1699_21556}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1eca90f-ae57-4ce5-9e4f-cb537e064f3b"
          }}
          style={styles.ImageBackground_1699_21557}
        />
      </View>
      <View style={styles.View_1699_21619}>
        <View style={styles.View_1699_21620}>
          <View style={styles.View_1699_21621}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/754c327d-cdc4-43b1-8dc0-436f8b25bf48"
              }}
              style={styles.ImageBackground_1699_21622}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61759a76-618e-42a4-9c00-1656aaa1d8ef"
              }}
              style={styles.ImageBackground_1699_21624}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eac7bee0-95e9-4fd7-977b-59f8339389e3"
            }}
            style={styles.ImageBackground_1699_21626}
          />
          <View style={styles.View_1699_21627}>
            <View style={styles.View_1699_21628}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb1b9f84-e180-4659-b7db-da46b9040153"
                }}
                style={styles.ImageBackground_1699_21629}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8303cdcf-394e-4dd6-b667-9984401b494c"
                }}
                style={styles.ImageBackground_1699_21631}
              />
            </View>
            <View style={styles.View_1699_21633}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05c7bb20-33f7-43ab-8c9c-20a3c0b7651d"
                }}
                style={styles.ImageBackground_1699_21634}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c20dc4d6-96ff-4c1e-8952-218202243c19"
                }}
                style={styles.ImageBackground_1699_21635}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c67ad04-ceff-42da-82ff-789d6aa54e34"
                }}
                style={styles.ImageBackground_1699_21636}
              />
            </View>
            <View style={styles.View_1699_21638}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea215396-a4b8-4ec9-9c67-3c5c0ad7beea"
                }}
                style={styles.ImageBackground_1699_21639}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1445e9e2-c868-453f-ae19-bbab7b732900"
                }}
                style={styles.ImageBackground_1699_21640}
              />
            </View>
            <View style={styles.View_1699_21642}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/464aabcf-5c33-4b12-a2e2-f3f9a1bc2919"
                }}
                style={styles.ImageBackground_1699_21643}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c08b2eec-ec7a-4930-9075-ae8582658467"
                }}
                style={styles.ImageBackground_1699_21645}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96000142-d1f3-40a9-a53f-1d684e98e378"
                }}
                style={styles.ImageBackground_1699_21647}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/542fadc3-98c5-4641-8332-00cf827d7591"
              }}
              style={styles.ImageBackground_1699_21648}
            />
            <View style={styles.View_1699_21649}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c62c981-7a7e-4e29-9fe1-1021b728d311"
                }}
                style={styles.ImageBackground_1699_21650}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/467808c5-66ce-4250-a85e-206e8c9064cd"
                }}
                style={styles.ImageBackground_1699_21652}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab642fc9-1508-4ff0-9355-11dadb90c311"
              }}
              style={styles.ImageBackground_1699_21654}
            />
          </View>
        </View>
        <View style={styles.View_1699_21655}>
          <View style={styles.View_1699_21656}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81865123-a8d7-4572-9e18-6dec7bdea3b7"
              }}
              style={styles.ImageBackground_1699_21657}
            />
            <View style={styles.View_1699_21659}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44c0c8d2-1a76-42a9-b591-7d7bc325f92b"
                }}
                style={styles.ImageBackground_1699_21660}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7efc5188-0acb-4573-8420-e7cb7a79efab"
                }}
                style={styles.ImageBackground_1699_21662}
              />
            </View>
            <View style={styles.View_1699_21664}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55e040c8-4539-454f-b50c-55af23a48133"
                }}
                style={styles.ImageBackground_1699_21665}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56333c3a-5eae-4c23-9a86-dfa4f6ff8bf8"
                }}
                style={styles.ImageBackground_1699_21666}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/391637a6-dabc-4611-87f0-5dd5ae70b241"
                }}
                style={styles.ImageBackground_1699_21667}
              />
            </View>
            <View style={styles.View_1699_21669}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/617ae2cd-656c-4530-b2a4-c727ec47049d"
                }}
                style={styles.ImageBackground_1699_21670}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b9bc555-27da-4c56-9e52-250d633b3ddf"
                }}
                style={styles.ImageBackground_1699_21671}
              />
            </View>
            <View style={styles.View_1699_21673}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1ef1f77-7a79-4ab1-8de8-2e87ad0b2a42"
                }}
                style={styles.ImageBackground_1699_21674}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68736491-42a7-4de8-9ef6-593aaa21badb"
                }}
                style={styles.ImageBackground_1699_21676}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/daa9a9e5-074b-4062-8e82-39226ad8c076"
                }}
                style={styles.ImageBackground_1699_21678}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48fb0df0-bb00-4255-8622-5f811cbfb365"
              }}
              style={styles.ImageBackground_1699_21679}
            />
            <View style={styles.View_1699_21680}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98b8e5f5-7cbb-4f24-afce-e78502df9db3"
                }}
                style={styles.ImageBackground_1699_21681}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99a6bad6-4d16-4d59-9e04-553aa8b44ec5"
                }}
                style={styles.ImageBackground_1699_21683}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70812e62-1ed3-4a4c-8f05-2026e9d3c6ba"
              }}
              style={styles.ImageBackground_1699_21685}
            />
          </View>
          <View style={styles.View_1699_21686}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/516021c6-942f-41ea-aa84-2fdd4d0ad633"
              }}
              style={styles.ImageBackground_1699_21687}
            />
            <View style={styles.View_1699_21689}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f57c29a-e602-4b68-9095-c478b0424efd"
                }}
                style={styles.ImageBackground_1699_21690}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2bec43b-1eeb-45b4-8a1e-dec7005e0f20"
                }}
                style={styles.ImageBackground_1699_21692}
              />
            </View>
            <View style={styles.View_1699_21694}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4caac693-909c-44da-8b4d-7edd160c85e5"
                }}
                style={styles.ImageBackground_1699_21695}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20aa65c2-47a9-443c-92bc-0c36d07a948a"
                }}
                style={styles.ImageBackground_1699_21696}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e54a729-de9f-4f46-ba3f-9dc1323a3c21"
                }}
                style={styles.ImageBackground_1699_21697}
              />
            </View>
            <View style={styles.View_1699_21699}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67af6744-5cf9-427c-8a5f-58b01501900d"
                }}
                style={styles.ImageBackground_1699_21700}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a26383ab-a7ea-477f-a61b-c418be171b4e"
                }}
                style={styles.ImageBackground_1699_21701}
              />
            </View>
            <View style={styles.View_1699_21703}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2867f0e-00c3-4409-a342-b0725df9b696"
                }}
                style={styles.ImageBackground_1699_21704}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05d6ea9c-29e4-4051-b2a3-ecd4a3bb63aa"
                }}
                style={styles.ImageBackground_1699_21706}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edae6abe-0b4f-4c86-b300-622d45feadb9"
                }}
                style={styles.ImageBackground_1699_21708}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0611e27a-70c5-4c84-9631-1026aa604fb6"
              }}
              style={styles.ImageBackground_1699_21709}
            />
            <View style={styles.View_1699_21710}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c9e7dd-8733-4aca-a60a-96fabae37986"
                }}
                style={styles.ImageBackground_1699_21711}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3854c25-120e-4a32-a49b-d74efa5a9432"
                }}
                style={styles.ImageBackground_1699_21713}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/785bdeb8-905b-4c8e-a219-d32adda01c64"
              }}
              style={styles.ImageBackground_1699_21715}
            />
          </View>
        </View>
        <View style={styles.View_1699_21840}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c970ab56-558f-4098-b8f8-f2ec484a8cbb"
            }}
            style={styles.ImageBackground_1699_21841}
          />
          <View style={styles.View_1699_21842}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb83c072-0e21-490e-9568-d42e3949d8f8"
              }}
              style={styles.ImageBackground_1699_21843}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53f026e8-97f1-40d6-9095-9edb484a22ad"
              }}
              style={styles.ImageBackground_1699_21844}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b7ad295-0b26-496b-9ee0-89e899781ba0"
              }}
              style={styles.ImageBackground_1699_21845}
            />
          </View>
        </View>
        <View style={styles.View_1699_21852}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a504b677-6154-4542-bcdc-b0320e9de141"
            }}
            style={styles.ImageBackground_1699_21853}
          />
          <View style={styles.View_1699_21856} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0123cc0b-b1b5-49d8-8095-40235a693ba5"
            }}
            style={styles.ImageBackground_1699_21857}
          />
        </View>
      </View>
      <View style={styles.View_1699_21617}>
        <View style={styles.View_I1699_21617_882_1005}>
          <Text style={styles.Text_I1699_21617_882_1005}>Go Back</Text>
        </View>
      </View>
      <View style={styles.View_1699_22029}>
        <View style={styles.View_1699_21558}>
          <Text style={styles.Text_1699_21558}>We are coming soon</Text>
        </View>
        <View style={styles.View_1699_21559}>
          <Text style={styles.Text_1699_21559}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry`s standard dummy text ever since the 1500s,
          </Text>
        </View>
        <View style={styles.View_1699_21566}>
          <View style={styles.View_1699_21567}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eca4d7f4-7c10-4f5a-9ac9-0fb81dbaf33d"
              }}
              style={styles.ImageBackground_1699_21568}
            />
            <View style={styles.View_1699_21569}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee6765cb-e3c6-458b-95ec-ac5ce70993f1"
                }}
                style={styles.ImageBackground_1699_21570}
              />
              <View style={styles.View_1699_21571}>
                <Text style={styles.Text_1699_21571}>Subscribe</Text>
              </View>
            </View>
            <View style={styles.View_1699_21572}>
              <Text style={styles.Text_1699_21572}>Email Addres</Text>
            </View>
          </View>
          <View style={styles.View_1699_21573}>
            <Text style={styles.Text_1699_21573}>Subscribe Newsletter</Text>
          </View>
        </View>
        <View style={styles.View_1699_21741}>
          <View style={styles.View_1699_21722}>
            <View style={styles.View_1699_21717} />
            <View style={styles.View_1699_21720}>
              <View style={styles.View_1699_21721}>
                <View style={styles.View_1699_21719}>
                  <Text style={styles.Text_1699_21719}>Days</Text>
                </View>
                <View style={styles.View_1699_21718}>
                  <Text style={styles.Text_1699_21718}>18</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7994922-93ca-4bd5-bf78-d516849e5a7a"
            }}
            style={styles.ImageBackground_1699_21744}
          />
          <View style={styles.View_1699_21723}>
            <View style={styles.View_1699_21724} />
            <View style={styles.View_1699_21725}>
              <View style={styles.View_1699_21726}>
                <View style={styles.View_1699_21727}>
                  <Text style={styles.Text_1699_21727}>Hours</Text>
                </View>
                <View style={styles.View_1699_21728}>
                  <Text style={styles.Text_1699_21728}>13</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44f550ed-2849-4de6-be2e-16fdfebee852"
            }}
            style={styles.ImageBackground_1699_21751}
          />
          <View style={styles.View_1699_21729}>
            <View style={styles.View_1699_21730} />
            <View style={styles.View_1699_21731}>
              <View style={styles.View_1699_21732}>
                <View style={styles.View_1699_21733}>
                  <Text style={styles.Text_1699_21733}>Minutes</Text>
                </View>
                <View style={styles.View_1699_21734}>
                  <Text style={styles.Text_1699_21734}>56</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33ae9ebc-9b28-4c76-a51d-3d3429b2fe4b"
            }}
            style={styles.ImageBackground_1699_21754}
          />
          <View style={styles.View_1699_21735}>
            <View style={styles.View_1699_21736} />
            <View style={styles.View_1699_21738}>
              <View style={styles.View_1699_21739}>
                <Text style={styles.Text_1699_21739}>Seconds</Text>
              </View>
              <View style={styles.View_1699_21740}>
                <Text style={styles.Text_1699_21740}>18</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1699_21839}>
          <View style={styles.View_1699_21836}>
            <View style={styles.View_1699_21833} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bed0ef8-9cd8-4589-bd78-17e8fe87c0d7"
              }}
              style={styles.ImageBackground_1699_21820}
            />
          </View>
          <View style={styles.View_1699_21837}>
            <View style={styles.View_1699_21832} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eadba3a-1e9f-4cfd-b9fc-0be3b3a74a3a"
              }}
              style={styles.ImageBackground_1699_21821}
            />
          </View>
          <View style={styles.View_1699_21838}>
            <View style={styles.View_1699_21757} />
            <View style={styles.View_1699_21822}>
              <View style={styles.View_I1699_21822_1236_674} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec1a1d9d-a0c5-4830-a746-1eeb9a1cfcb7"
                }}
                style={styles.ImageBackground_I1699_21822_1236_675}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1ffde8f-dda9-4973-9a4d-f453ad33b892"
                }}
                style={styles.ImageBackground_I1699_21822_1236_676}
              />
            </View>
          </View>
          <View style={styles.View_1699_21835}>
            <View style={styles.View_1699_21834} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89d79c42-f288-4833-b7ec-1d0a491318d2"
              }}
              style={styles.ImageBackground_1699_21823}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("148%") },
  View_1699_21554: {
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
  View_1699_21555: {
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
  View_1699_21982: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("16%")
  },
  ImageBackground_1699_21983: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_1699_21990: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("36%")
  },
  ImageBackground_1699_21993: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("60%")
  },
  ImageBackground_1699_21996: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("71%")
  },
  ImageBackground_1699_21998: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("56%")
  },
  ImageBackground_1699_22006: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("60%")
  },
  ImageBackground_1699_22009: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("13%")
  },
  ImageBackground_1699_22015: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_1699_22019: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("4%")
  },
  ImageBackground_1699_22023: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("10%")
  },
  ImageBackground_1699_21556: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("7%")
  },
  ImageBackground_1699_21557: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%")
  },
  View_1699_21619: {
    width: wp("97%"),
    height: hp("118%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1699_21620: {
    width: wp("28%"),
    height: hp("72%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  View_1699_21621: {
    width: wp("28%"),
    height: hp("24%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21622: {
    width: wp("28%"),
    height: hp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21624: {
    width: wp("28%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21626: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_1699_21627: {
    width: wp("13%"),
    height: hp("62%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1699_21628: {
    width: wp("13%"),
    height: hp("11%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21629: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21631: {
    width: wp("13%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21633: {
    width: wp("12%"),
    height: hp("57%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1699_21634: {
    width: wp("12%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21635: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21636: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21638: {
    width: wp("10%"),
    height: hp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1699_21639: {
    width: wp("10%"),
    height: hp("31%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21640: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21642: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1699_21643: {
    width: wp("11%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21645: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21647: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1699_21648: {
    width: wp("3%"),
    height: hp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1699_21649: {
    width: wp("13%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21650: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21652: {
    width: wp("13%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21654: {
    width: wp("4%"),
    height: hp("21%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1699_21655: {
    width: wp("27%"),
    height: hp("28%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_1699_21656: {
    width: wp("7%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1699_21657: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21659: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21660: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21662: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21664: {
    width: wp("5%"),
    height: hp("26%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21665: {
    width: wp("5%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21666: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21667: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21669: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1699_21670: {
    width: wp("4%"),
    height: hp("14%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21671: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21673: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21674: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21676: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21678: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1699_21679: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1699_21680: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21681: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21683: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21685: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1699_21686: {
    width: wp("7%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21687: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21689: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21690: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21692: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21694: {
    width: wp("5%"),
    height: hp("26%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21695: {
    width: wp("5%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21696: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21697: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21699: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1699_21700: {
    width: wp("4%"),
    height: hp("14%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21701: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21703: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21704: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21706: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21708: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1699_21709: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1699_21710: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21711: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21713: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1699_21715: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1699_21840: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_1699_21841: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21842: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_1699_21843: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1699_21844: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1699_21845: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21852: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_1699_21853: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_1699_21856: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1699_21857: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%")
  },
  View_1699_21617: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("125%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  View_I1699_21617_882_1005: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1699_21617_882_1005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_1699_22029: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("35%")
  },
  View_1699_21558: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1699_21558: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21559: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_1699_21559: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21566: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("50%")
  },
  View_1699_21567: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_1699_21568: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21569: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  ImageBackground_1699_21570: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21571: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1699_21571: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21572: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1699_21572: {
    color: "rgba(116, 118, 129, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21573: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1699_21573: {
    color: "rgba(26, 32, 44, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21741: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("27%")
  },
  View_1699_21722: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21717: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(232, 237, 255, 1)",
    borderWidth: 2
  },
  View_1699_21720: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_1699_21721: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21719: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_1699_21719: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21718: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1699_21718: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1699_21744: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  View_1699_21723: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_1699_21724: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(232, 237, 255, 1)",
    borderWidth: 2
  },
  View_1699_21725: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_1699_21726: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21727: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_1699_21727: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21728: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1699_21728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1699_21751: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%")
  },
  View_1699_21729: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  View_1699_21730: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(232, 237, 255, 1)",
    borderWidth: 2
  },
  View_1699_21731: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_1699_21732: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21733: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_1699_21733: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21734: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1699_21734: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1699_21754: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%")
  },
  View_1699_21735: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  View_1699_21736: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(232, 237, 255, 1)",
    borderWidth: 2
  },
  View_1699_21738: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_1699_21739: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_1699_21739: {
    color: "rgba(113, 128, 150, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21740: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1699_21740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1699_21839: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("73%")
  },
  View_1699_21836: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_1699_21833: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 232, 240, 1)"
  },
  ImageBackground_1699_21820: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21837: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_1699_21832: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 232, 240, 1)"
  },
  ImageBackground_1699_21821: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1699_21838: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1699_21757: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 197, 94, 1)"
  },
  View_1699_21822: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1699_21822_1236_674: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.5
  },
  ImageBackground_I1699_21822_1236_675: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I1699_21822_1236_676: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1699_21835: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_1699_21834: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 232, 240, 1)"
  },
  ImageBackground_1699_21823: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
