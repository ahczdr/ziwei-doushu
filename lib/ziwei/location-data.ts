/* Generated from https://raw.githubusercontent.com/zhChuXiao/ChinaGeoJson/7aa2c5fabc6a892015625898c3482874b233f9de/info.json on 2026-08-26. Do not edit by hand. */
export type LocationLevel = 'province' | 'city' | 'district';

export interface LocationNode {
  code: string;
  name: string;
  level: LocationLevel;
  parentCode?: string;
  longitude: number;
  children: LocationNode[];
}

export const LOCATION_SOURCE = {
  url: 'https://raw.githubusercontent.com/zhChuXiao/ChinaGeoJson/7aa2c5fabc6a892015625898c3482874b233f9de/info.json',
  commit: '7aa2c5fabc6a892015625898c3482874b233f9de',
} as const;

export const LOCATION_PROVINCES: LocationNode[] = [
  {
    "code": "110000",
    "name": "北京市",
    "level": "province",
    "longitude": 116.405285,
    "children": [
      {
        "code": "110000-direct",
        "name": "北京市",
        "level": "city",
        "parentCode": "110000",
        "longitude": 116.405285,
        "children": [
          {
            "code": "110101",
            "name": "东城区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.418757,
            "children": []
          },
          {
            "code": "110102",
            "name": "西城区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.366794,
            "children": []
          },
          {
            "code": "110105",
            "name": "朝阳区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.486409,
            "children": []
          },
          {
            "code": "110106",
            "name": "丰台区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.286968,
            "children": []
          },
          {
            "code": "110107",
            "name": "石景山区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.195445,
            "children": []
          },
          {
            "code": "110108",
            "name": "海淀区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.310316,
            "children": []
          },
          {
            "code": "110109",
            "name": "门头沟区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.105381,
            "children": []
          },
          {
            "code": "110111",
            "name": "房山区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.139157,
            "children": []
          },
          {
            "code": "110112",
            "name": "通州区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.658603,
            "children": []
          },
          {
            "code": "110113",
            "name": "顺义区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.653525,
            "children": []
          },
          {
            "code": "110114",
            "name": "昌平区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.235906,
            "children": []
          },
          {
            "code": "110115",
            "name": "大兴区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.338033,
            "children": []
          },
          {
            "code": "110116",
            "name": "怀柔区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.637122,
            "children": []
          },
          {
            "code": "110117",
            "name": "平谷区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 117.112335,
            "children": []
          },
          {
            "code": "110118",
            "name": "密云区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 116.843352,
            "children": []
          },
          {
            "code": "110119",
            "name": "延庆区",
            "level": "district",
            "parentCode": "110000-direct",
            "longitude": 115.985006,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "120000",
    "name": "天津市",
    "level": "province",
    "longitude": 117.190182,
    "children": [
      {
        "code": "120000-direct",
        "name": "天津市",
        "level": "city",
        "parentCode": "120000",
        "longitude": 117.190182,
        "children": [
          {
            "code": "120101",
            "name": "和平区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.195907,
            "children": []
          },
          {
            "code": "120102",
            "name": "河东区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.226568,
            "children": []
          },
          {
            "code": "120103",
            "name": "河西区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.217536,
            "children": []
          },
          {
            "code": "120104",
            "name": "南开区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.164143,
            "children": []
          },
          {
            "code": "120105",
            "name": "河北区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.201569,
            "children": []
          },
          {
            "code": "120106",
            "name": "红桥区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.163301,
            "children": []
          },
          {
            "code": "120110",
            "name": "东丽区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.313967,
            "children": []
          },
          {
            "code": "120111",
            "name": "西青区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.012247,
            "children": []
          },
          {
            "code": "120112",
            "name": "津南区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.382549,
            "children": []
          },
          {
            "code": "120113",
            "name": "北辰区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.13482,
            "children": []
          },
          {
            "code": "120114",
            "name": "武清区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.057959,
            "children": []
          },
          {
            "code": "120115",
            "name": "宝坻区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.308094,
            "children": []
          },
          {
            "code": "120116",
            "name": "滨海新区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.654173,
            "children": []
          },
          {
            "code": "120117",
            "name": "宁河区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.82828,
            "children": []
          },
          {
            "code": "120118",
            "name": "静海区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 116.925304,
            "children": []
          },
          {
            "code": "120119",
            "name": "蓟州区",
            "level": "district",
            "parentCode": "120000-direct",
            "longitude": 117.407449,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "130000",
    "name": "河北省",
    "level": "province",
    "longitude": 114.502461,
    "children": [
      {
        "code": "130100",
        "name": "石家庄市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 114.502461,
        "children": [
          {
            "code": "130102",
            "name": "长安区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.548151,
            "children": []
          },
          {
            "code": "130104",
            "name": "桥西区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.462931,
            "children": []
          },
          {
            "code": "130105",
            "name": "新华区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.465974,
            "children": []
          },
          {
            "code": "130107",
            "name": "井陉矿区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.058178,
            "children": []
          },
          {
            "code": "130108",
            "name": "裕华区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.533257,
            "children": []
          },
          {
            "code": "130109",
            "name": "藁城区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.849647,
            "children": []
          },
          {
            "code": "130110",
            "name": "鹿泉区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.321023,
            "children": []
          },
          {
            "code": "130111",
            "name": "栾城区",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.654281,
            "children": []
          },
          {
            "code": "130121",
            "name": "井陉县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.144488,
            "children": []
          },
          {
            "code": "130123",
            "name": "正定县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.569887,
            "children": []
          },
          {
            "code": "130125",
            "name": "行唐县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.552734,
            "children": []
          },
          {
            "code": "130126",
            "name": "灵寿县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.37946,
            "children": []
          },
          {
            "code": "130127",
            "name": "高邑县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.610699,
            "children": []
          },
          {
            "code": "130128",
            "name": "深泽县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 115.200207,
            "children": []
          },
          {
            "code": "130129",
            "name": "赞皇县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.387756,
            "children": []
          },
          {
            "code": "130130",
            "name": "无极县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.977845,
            "children": []
          },
          {
            "code": "130131",
            "name": "平山县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.184144,
            "children": []
          },
          {
            "code": "130132",
            "name": "元氏县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.52618,
            "children": []
          },
          {
            "code": "130133",
            "name": "赵县",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.775362,
            "children": []
          },
          {
            "code": "130181",
            "name": "辛集市",
            "level": "district",
            "parentCode": "130100",
            "longitude": 115.217451,
            "children": []
          },
          {
            "code": "130183",
            "name": "晋州市",
            "level": "district",
            "parentCode": "130100",
            "longitude": 115.044886,
            "children": []
          },
          {
            "code": "130184",
            "name": "新乐市",
            "level": "district",
            "parentCode": "130100",
            "longitude": 114.68578,
            "children": []
          }
        ]
      },
      {
        "code": "130200",
        "name": "唐山市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 118.175393,
        "children": [
          {
            "code": "130202",
            "name": "路南区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.210821,
            "children": []
          },
          {
            "code": "130203",
            "name": "路北区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.174736,
            "children": []
          },
          {
            "code": "130204",
            "name": "古冶区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.45429,
            "children": []
          },
          {
            "code": "130205",
            "name": "开平区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.264425,
            "children": []
          },
          {
            "code": "130207",
            "name": "丰南区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.110793,
            "children": []
          },
          {
            "code": "130208",
            "name": "丰润区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.155779,
            "children": []
          },
          {
            "code": "130209",
            "name": "曹妃甸区",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.446585,
            "children": []
          },
          {
            "code": "130224",
            "name": "滦南县",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.681552,
            "children": []
          },
          {
            "code": "130225",
            "name": "乐亭县",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.905341,
            "children": []
          },
          {
            "code": "130227",
            "name": "迁西县",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.305139,
            "children": []
          },
          {
            "code": "130229",
            "name": "玉田县",
            "level": "district",
            "parentCode": "130200",
            "longitude": 117.753665,
            "children": []
          },
          {
            "code": "130281",
            "name": "遵化市",
            "level": "district",
            "parentCode": "130200",
            "longitude": 117.965875,
            "children": []
          },
          {
            "code": "130283",
            "name": "迁安市",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.701933,
            "children": []
          },
          {
            "code": "130284",
            "name": "滦州市",
            "level": "district",
            "parentCode": "130200",
            "longitude": 118.699546,
            "children": []
          }
        ]
      },
      {
        "code": "130300",
        "name": "秦皇岛市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 119.586579,
        "children": [
          {
            "code": "130302",
            "name": "海港区",
            "level": "district",
            "parentCode": "130300",
            "longitude": 119.596224,
            "children": []
          },
          {
            "code": "130303",
            "name": "山海关区",
            "level": "district",
            "parentCode": "130300",
            "longitude": 119.753591,
            "children": []
          },
          {
            "code": "130304",
            "name": "北戴河区",
            "level": "district",
            "parentCode": "130300",
            "longitude": 119.486286,
            "children": []
          },
          {
            "code": "130306",
            "name": "抚宁区",
            "level": "district",
            "parentCode": "130300",
            "longitude": 119.240651,
            "children": []
          },
          {
            "code": "130321",
            "name": "青龙满族自治县",
            "level": "district",
            "parentCode": "130300",
            "longitude": 118.954555,
            "children": []
          },
          {
            "code": "130322",
            "name": "昌黎县",
            "level": "district",
            "parentCode": "130300",
            "longitude": 119.164541,
            "children": []
          },
          {
            "code": "130324",
            "name": "卢龙县",
            "level": "district",
            "parentCode": "130300",
            "longitude": 118.881809,
            "children": []
          }
        ]
      },
      {
        "code": "130400",
        "name": "邯郸市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 114.490686,
        "children": [
          {
            "code": "130402",
            "name": "邯山区",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.484989,
            "children": []
          },
          {
            "code": "130403",
            "name": "丛台区",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.494703,
            "children": []
          },
          {
            "code": "130404",
            "name": "复兴区",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.458242,
            "children": []
          },
          {
            "code": "130406",
            "name": "峰峰矿区",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.209936,
            "children": []
          },
          {
            "code": "130407",
            "name": "肥乡区",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.805154,
            "children": []
          },
          {
            "code": "130408",
            "name": "永年区",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.496162,
            "children": []
          },
          {
            "code": "130423",
            "name": "临漳县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.610703,
            "children": []
          },
          {
            "code": "130424",
            "name": "成安县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.680356,
            "children": []
          },
          {
            "code": "130425",
            "name": "大名县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 115.152586,
            "children": []
          },
          {
            "code": "130426",
            "name": "涉县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 113.673297,
            "children": []
          },
          {
            "code": "130427",
            "name": "磁县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.38208,
            "children": []
          },
          {
            "code": "130430",
            "name": "邱县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 115.168584,
            "children": []
          },
          {
            "code": "130431",
            "name": "鸡泽县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.878517,
            "children": []
          },
          {
            "code": "130432",
            "name": "广平县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.950859,
            "children": []
          },
          {
            "code": "130433",
            "name": "馆陶县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 115.289057,
            "children": []
          },
          {
            "code": "130434",
            "name": "魏县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.93411,
            "children": []
          },
          {
            "code": "130435",
            "name": "曲周县",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.957588,
            "children": []
          },
          {
            "code": "130481",
            "name": "武安市",
            "level": "district",
            "parentCode": "130400",
            "longitude": 114.194581,
            "children": []
          }
        ]
      },
      {
        "code": "130500",
        "name": "邢台市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 114.508851,
        "children": [
          {
            "code": "130502",
            "name": "襄都区",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.507131,
            "children": []
          },
          {
            "code": "130503",
            "name": "信都区",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.473687,
            "children": []
          },
          {
            "code": "130505",
            "name": "任泽区",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.684469,
            "children": []
          },
          {
            "code": "130506",
            "name": "南和区",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.691377,
            "children": []
          },
          {
            "code": "130522",
            "name": "临城县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.506873,
            "children": []
          },
          {
            "code": "130523",
            "name": "内丘县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.511523,
            "children": []
          },
          {
            "code": "130524",
            "name": "柏乡县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.693382,
            "children": []
          },
          {
            "code": "130525",
            "name": "隆尧县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.776348,
            "children": []
          },
          {
            "code": "130528",
            "name": "宁晋县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.921027,
            "children": []
          },
          {
            "code": "130529",
            "name": "巨鹿县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.038782,
            "children": []
          },
          {
            "code": "130530",
            "name": "新河县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.247537,
            "children": []
          },
          {
            "code": "130531",
            "name": "广宗县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.142797,
            "children": []
          },
          {
            "code": "130532",
            "name": "平乡县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.029218,
            "children": []
          },
          {
            "code": "130533",
            "name": "威县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.272749,
            "children": []
          },
          {
            "code": "130534",
            "name": "清河县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.668999,
            "children": []
          },
          {
            "code": "130535",
            "name": "临西县",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.498684,
            "children": []
          },
          {
            "code": "130581",
            "name": "南宫市",
            "level": "district",
            "parentCode": "130500",
            "longitude": 115.398102,
            "children": []
          },
          {
            "code": "130582",
            "name": "沙河市",
            "level": "district",
            "parentCode": "130500",
            "longitude": 114.504902,
            "children": []
          }
        ]
      },
      {
        "code": "130600",
        "name": "保定市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 115.482331,
        "children": [
          {
            "code": "130602",
            "name": "竞秀区",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.470659,
            "children": []
          },
          {
            "code": "130606",
            "name": "莲池区",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.500934,
            "children": []
          },
          {
            "code": "130607",
            "name": "满城区",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.32442,
            "children": []
          },
          {
            "code": "130608",
            "name": "清苑区",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.492221,
            "children": []
          },
          {
            "code": "130609",
            "name": "徐水区",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.64941,
            "children": []
          },
          {
            "code": "130623",
            "name": "涞水县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.711985,
            "children": []
          },
          {
            "code": "130624",
            "name": "阜平县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 114.198801,
            "children": []
          },
          {
            "code": "130626",
            "name": "定兴县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.796895,
            "children": []
          },
          {
            "code": "130627",
            "name": "唐县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 114.981241,
            "children": []
          },
          {
            "code": "130628",
            "name": "高阳县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.778878,
            "children": []
          },
          {
            "code": "130629",
            "name": "容城县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.866247,
            "children": []
          },
          {
            "code": "130630",
            "name": "涞源县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 114.692567,
            "children": []
          },
          {
            "code": "130631",
            "name": "望都县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.154009,
            "children": []
          },
          {
            "code": "130632",
            "name": "安新县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.931979,
            "children": []
          },
          {
            "code": "130633",
            "name": "易县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.501146,
            "children": []
          },
          {
            "code": "130634",
            "name": "曲阳县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 114.704055,
            "children": []
          },
          {
            "code": "130635",
            "name": "蠡县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.583631,
            "children": []
          },
          {
            "code": "130636",
            "name": "顺平县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.132749,
            "children": []
          },
          {
            "code": "130637",
            "name": "博野县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.461798,
            "children": []
          },
          {
            "code": "130638",
            "name": "雄县",
            "level": "district",
            "parentCode": "130600",
            "longitude": 116.107474,
            "children": []
          },
          {
            "code": "130681",
            "name": "涿州市",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.973409,
            "children": []
          },
          {
            "code": "130682",
            "name": "定州市",
            "level": "district",
            "parentCode": "130600",
            "longitude": 114.991389,
            "children": []
          },
          {
            "code": "130683",
            "name": "安国市",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.33141,
            "children": []
          },
          {
            "code": "130684",
            "name": "高碑店市",
            "level": "district",
            "parentCode": "130600",
            "longitude": 115.882704,
            "children": []
          }
        ]
      },
      {
        "code": "130700",
        "name": "张家口市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 114.884091,
        "children": [
          {
            "code": "130702",
            "name": "桥东区",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.885658,
            "children": []
          },
          {
            "code": "130703",
            "name": "桥西区",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.882127,
            "children": []
          },
          {
            "code": "130705",
            "name": "宣化区",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.0632,
            "children": []
          },
          {
            "code": "130706",
            "name": "下花园区",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.281002,
            "children": []
          },
          {
            "code": "130708",
            "name": "万全区",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.736131,
            "children": []
          },
          {
            "code": "130709",
            "name": "崇礼区",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.281652,
            "children": []
          },
          {
            "code": "130722",
            "name": "张北县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.715951,
            "children": []
          },
          {
            "code": "130723",
            "name": "康保县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.615809,
            "children": []
          },
          {
            "code": "130724",
            "name": "沽源县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.684836,
            "children": []
          },
          {
            "code": "130725",
            "name": "尚义县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 113.977713,
            "children": []
          },
          {
            "code": "130726",
            "name": "蔚县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.582695,
            "children": []
          },
          {
            "code": "130727",
            "name": "阳原县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.167343,
            "children": []
          },
          {
            "code": "130728",
            "name": "怀安县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 114.422364,
            "children": []
          },
          {
            "code": "130730",
            "name": "怀来县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.520846,
            "children": []
          },
          {
            "code": "130731",
            "name": "涿鹿县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.219246,
            "children": []
          },
          {
            "code": "130732",
            "name": "赤城县",
            "level": "district",
            "parentCode": "130700",
            "longitude": 115.832708,
            "children": []
          }
        ]
      },
      {
        "code": "130800",
        "name": "承德市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 117.939152,
        "children": [
          {
            "code": "130802",
            "name": "双桥区",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.939152,
            "children": []
          },
          {
            "code": "130803",
            "name": "双滦区",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.797485,
            "children": []
          },
          {
            "code": "130804",
            "name": "鹰手营子矿区",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.661154,
            "children": []
          },
          {
            "code": "130821",
            "name": "承德县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 118.172496,
            "children": []
          },
          {
            "code": "130822",
            "name": "兴隆县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.507098,
            "children": []
          },
          {
            "code": "130824",
            "name": "滦平县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.337124,
            "children": []
          },
          {
            "code": "130825",
            "name": "隆化县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.736343,
            "children": []
          },
          {
            "code": "130826",
            "name": "丰宁满族自治县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 116.65121,
            "children": []
          },
          {
            "code": "130827",
            "name": "宽城满族自治县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 118.488642,
            "children": []
          },
          {
            "code": "130828",
            "name": "围场满族蒙古族自治县",
            "level": "district",
            "parentCode": "130800",
            "longitude": 117.764086,
            "children": []
          },
          {
            "code": "130881",
            "name": "平泉市",
            "level": "district",
            "parentCode": "130800",
            "longitude": 118.690238,
            "children": []
          }
        ]
      },
      {
        "code": "130900",
        "name": "沧州市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 116.857461,
        "children": [
          {
            "code": "130902",
            "name": "新华区",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.873049,
            "children": []
          },
          {
            "code": "130903",
            "name": "运河区",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.840063,
            "children": []
          },
          {
            "code": "130921",
            "name": "沧县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 117.007478,
            "children": []
          },
          {
            "code": "130922",
            "name": "青县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.838384,
            "children": []
          },
          {
            "code": "130923",
            "name": "东光县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.542062,
            "children": []
          },
          {
            "code": "130924",
            "name": "海兴县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 117.496606,
            "children": []
          },
          {
            "code": "130925",
            "name": "盐山县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 117.229814,
            "children": []
          },
          {
            "code": "130926",
            "name": "肃宁县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 115.835856,
            "children": []
          },
          {
            "code": "130927",
            "name": "南皮县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.709171,
            "children": []
          },
          {
            "code": "130928",
            "name": "吴桥县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.391512,
            "children": []
          },
          {
            "code": "130929",
            "name": "献县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.123844,
            "children": []
          },
          {
            "code": "130930",
            "name": "孟村回族自治县",
            "level": "district",
            "parentCode": "130900",
            "longitude": 117.105104,
            "children": []
          },
          {
            "code": "130981",
            "name": "泊头市",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.570163,
            "children": []
          },
          {
            "code": "130982",
            "name": "任丘市",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.106764,
            "children": []
          },
          {
            "code": "130983",
            "name": "黄骅市",
            "level": "district",
            "parentCode": "130900",
            "longitude": 117.343803,
            "children": []
          },
          {
            "code": "130984",
            "name": "河间市",
            "level": "district",
            "parentCode": "130900",
            "longitude": 116.089452,
            "children": []
          }
        ]
      },
      {
        "code": "131000",
        "name": "廊坊市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 116.704441,
        "children": [
          {
            "code": "131002",
            "name": "安次区",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.694544,
            "children": []
          },
          {
            "code": "131003",
            "name": "广阳区",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.713708,
            "children": []
          },
          {
            "code": "131022",
            "name": "固安县",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.299894,
            "children": []
          },
          {
            "code": "131023",
            "name": "永清县",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.498089,
            "children": []
          },
          {
            "code": "131024",
            "name": "香河县",
            "level": "district",
            "parentCode": "131000",
            "longitude": 117.007161,
            "children": []
          },
          {
            "code": "131025",
            "name": "大城县",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.640735,
            "children": []
          },
          {
            "code": "131026",
            "name": "文安县",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.460107,
            "children": []
          },
          {
            "code": "131028",
            "name": "大厂回族自治县",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.986501,
            "children": []
          },
          {
            "code": "131081",
            "name": "霸州市",
            "level": "district",
            "parentCode": "131000",
            "longitude": 116.392021,
            "children": []
          },
          {
            "code": "131082",
            "name": "三河市",
            "level": "district",
            "parentCode": "131000",
            "longitude": 117.077018,
            "children": []
          }
        ]
      },
      {
        "code": "131100",
        "name": "衡水市",
        "level": "city",
        "parentCode": "130000",
        "longitude": 115.665993,
        "children": [
          {
            "code": "131102",
            "name": "桃城区",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.694945,
            "children": []
          },
          {
            "code": "131103",
            "name": "冀州区",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.579173,
            "children": []
          },
          {
            "code": "131121",
            "name": "枣强县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.726499,
            "children": []
          },
          {
            "code": "131122",
            "name": "武邑县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.892415,
            "children": []
          },
          {
            "code": "131123",
            "name": "武强县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.970236,
            "children": []
          },
          {
            "code": "131124",
            "name": "饶阳县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.726577,
            "children": []
          },
          {
            "code": "131125",
            "name": "安平县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.519627,
            "children": []
          },
          {
            "code": "131126",
            "name": "故城县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.966747,
            "children": []
          },
          {
            "code": "131127",
            "name": "景县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 116.258446,
            "children": []
          },
          {
            "code": "131128",
            "name": "阜城县",
            "level": "district",
            "parentCode": "131100",
            "longitude": 116.164727,
            "children": []
          },
          {
            "code": "131182",
            "name": "深州市",
            "level": "district",
            "parentCode": "131100",
            "longitude": 115.554596,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "140000",
    "name": "山西省",
    "level": "province",
    "longitude": 112.549248,
    "children": [
      {
        "code": "140100",
        "name": "太原市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 112.549248,
        "children": [
          {
            "code": "140105",
            "name": "小店区",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.564273,
            "children": []
          },
          {
            "code": "140106",
            "name": "迎泽区",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.558851,
            "children": []
          },
          {
            "code": "140107",
            "name": "杏花岭区",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.560743,
            "children": []
          },
          {
            "code": "140108",
            "name": "尖草坪区",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.487122,
            "children": []
          },
          {
            "code": "140109",
            "name": "万柏林区",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.522258,
            "children": []
          },
          {
            "code": "140110",
            "name": "晋源区",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.477849,
            "children": []
          },
          {
            "code": "140121",
            "name": "清徐县",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.357961,
            "children": []
          },
          {
            "code": "140122",
            "name": "阳曲县",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.673818,
            "children": []
          },
          {
            "code": "140123",
            "name": "娄烦县",
            "level": "district",
            "parentCode": "140100",
            "longitude": 111.793798,
            "children": []
          },
          {
            "code": "140181",
            "name": "古交市",
            "level": "district",
            "parentCode": "140100",
            "longitude": 112.174353,
            "children": []
          }
        ]
      },
      {
        "code": "140200",
        "name": "大同市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 113.295259,
        "children": [
          {
            "code": "140212",
            "name": "新荣区",
            "level": "district",
            "parentCode": "140200",
            "longitude": 113.141044,
            "children": []
          },
          {
            "code": "140213",
            "name": "平城区",
            "level": "district",
            "parentCode": "140200",
            "longitude": 113.298027,
            "children": []
          },
          {
            "code": "140214",
            "name": "云冈区",
            "level": "district",
            "parentCode": "140200",
            "longitude": 113.149693,
            "children": []
          },
          {
            "code": "140215",
            "name": "云州区",
            "level": "district",
            "parentCode": "140200",
            "longitude": 113.61244,
            "children": []
          },
          {
            "code": "140221",
            "name": "阳高县",
            "level": "district",
            "parentCode": "140200",
            "longitude": 113.749871,
            "children": []
          },
          {
            "code": "140222",
            "name": "天镇县",
            "level": "district",
            "parentCode": "140200",
            "longitude": 114.09112,
            "children": []
          },
          {
            "code": "140223",
            "name": "广灵县",
            "level": "district",
            "parentCode": "140200",
            "longitude": 114.279252,
            "children": []
          },
          {
            "code": "140224",
            "name": "灵丘县",
            "level": "district",
            "parentCode": "140200",
            "longitude": 114.23576,
            "children": []
          },
          {
            "code": "140225",
            "name": "浑源县",
            "level": "district",
            "parentCode": "140200",
            "longitude": 113.698091,
            "children": []
          },
          {
            "code": "140226",
            "name": "左云县",
            "level": "district",
            "parentCode": "140200",
            "longitude": 112.70641,
            "children": []
          }
        ]
      },
      {
        "code": "140300",
        "name": "阳泉市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 113.583285,
        "children": [
          {
            "code": "140302",
            "name": "城区",
            "level": "district",
            "parentCode": "140300",
            "longitude": 113.586513,
            "children": []
          },
          {
            "code": "140303",
            "name": "矿区",
            "level": "district",
            "parentCode": "140300",
            "longitude": 113.559066,
            "children": []
          },
          {
            "code": "140311",
            "name": "郊区",
            "level": "district",
            "parentCode": "140300",
            "longitude": 113.58664,
            "children": []
          },
          {
            "code": "140321",
            "name": "平定县",
            "level": "district",
            "parentCode": "140300",
            "longitude": 113.631049,
            "children": []
          },
          {
            "code": "140322",
            "name": "盂县",
            "level": "district",
            "parentCode": "140300",
            "longitude": 113.41223,
            "children": []
          }
        ]
      },
      {
        "code": "140400",
        "name": "长治市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 113.113556,
        "children": [
          {
            "code": "140403",
            "name": "潞州区",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.114107,
            "children": []
          },
          {
            "code": "140404",
            "name": "上党区",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.056679,
            "children": []
          },
          {
            "code": "140405",
            "name": "屯留区",
            "level": "district",
            "parentCode": "140400",
            "longitude": 112.892741,
            "children": []
          },
          {
            "code": "140406",
            "name": "潞城区",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.223245,
            "children": []
          },
          {
            "code": "140423",
            "name": "襄垣县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.050094,
            "children": []
          },
          {
            "code": "140425",
            "name": "平顺县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.438791,
            "children": []
          },
          {
            "code": "140426",
            "name": "黎城县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.387366,
            "children": []
          },
          {
            "code": "140427",
            "name": "壶关县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 113.206138,
            "children": []
          },
          {
            "code": "140428",
            "name": "长子县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 112.884656,
            "children": []
          },
          {
            "code": "140429",
            "name": "武乡县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 112.8653,
            "children": []
          },
          {
            "code": "140430",
            "name": "沁县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 112.70138,
            "children": []
          },
          {
            "code": "140431",
            "name": "沁源县",
            "level": "district",
            "parentCode": "140400",
            "longitude": 112.340878,
            "children": []
          }
        ]
      },
      {
        "code": "140500",
        "name": "晋城市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 112.851274,
        "children": [
          {
            "code": "140502",
            "name": "城区",
            "level": "district",
            "parentCode": "140500",
            "longitude": 112.853106,
            "children": []
          },
          {
            "code": "140521",
            "name": "沁水县",
            "level": "district",
            "parentCode": "140500",
            "longitude": 112.187213,
            "children": []
          },
          {
            "code": "140522",
            "name": "阳城县",
            "level": "district",
            "parentCode": "140500",
            "longitude": 112.422014,
            "children": []
          },
          {
            "code": "140524",
            "name": "陵川县",
            "level": "district",
            "parentCode": "140500",
            "longitude": 113.278877,
            "children": []
          },
          {
            "code": "140525",
            "name": "泽州县",
            "level": "district",
            "parentCode": "140500",
            "longitude": 112.899137,
            "children": []
          },
          {
            "code": "140581",
            "name": "高平市",
            "level": "district",
            "parentCode": "140500",
            "longitude": 112.930691,
            "children": []
          }
        ]
      },
      {
        "code": "140600",
        "name": "朔州市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 112.433387,
        "children": [
          {
            "code": "140602",
            "name": "朔城区",
            "level": "district",
            "parentCode": "140600",
            "longitude": 112.428676,
            "children": []
          },
          {
            "code": "140603",
            "name": "平鲁区",
            "level": "district",
            "parentCode": "140600",
            "longitude": 112.295227,
            "children": []
          },
          {
            "code": "140621",
            "name": "山阴县",
            "level": "district",
            "parentCode": "140600",
            "longitude": 112.816396,
            "children": []
          },
          {
            "code": "140622",
            "name": "应县",
            "level": "district",
            "parentCode": "140600",
            "longitude": 113.187505,
            "children": []
          },
          {
            "code": "140623",
            "name": "右玉县",
            "level": "district",
            "parentCode": "140600",
            "longitude": 112.465588,
            "children": []
          },
          {
            "code": "140681",
            "name": "怀仁市",
            "level": "district",
            "parentCode": "140600",
            "longitude": 113.100511,
            "children": []
          }
        ]
      },
      {
        "code": "140700",
        "name": "晋中市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 112.736465,
        "children": [
          {
            "code": "140702",
            "name": "榆次区",
            "level": "district",
            "parentCode": "140700",
            "longitude": 112.740056,
            "children": []
          },
          {
            "code": "140703",
            "name": "太谷区",
            "level": "district",
            "parentCode": "140700",
            "longitude": 112.554103,
            "children": []
          },
          {
            "code": "140721",
            "name": "榆社县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 112.973521,
            "children": []
          },
          {
            "code": "140722",
            "name": "左权县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 113.377834,
            "children": []
          },
          {
            "code": "140723",
            "name": "和顺县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 113.572919,
            "children": []
          },
          {
            "code": "140724",
            "name": "昔阳县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 113.706166,
            "children": []
          },
          {
            "code": "140725",
            "name": "寿阳县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 113.177708,
            "children": []
          },
          {
            "code": "140727",
            "name": "祁县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 112.330532,
            "children": []
          },
          {
            "code": "140728",
            "name": "平遥县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 112.174059,
            "children": []
          },
          {
            "code": "140729",
            "name": "灵石县",
            "level": "district",
            "parentCode": "140700",
            "longitude": 111.772759,
            "children": []
          },
          {
            "code": "140781",
            "name": "介休市",
            "level": "district",
            "parentCode": "140700",
            "longitude": 111.913857,
            "children": []
          }
        ]
      },
      {
        "code": "140800",
        "name": "运城市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 111.003957,
        "children": [
          {
            "code": "140802",
            "name": "盐湖区",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.000627,
            "children": []
          },
          {
            "code": "140821",
            "name": "临猗县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 110.77493,
            "children": []
          },
          {
            "code": "140822",
            "name": "万荣县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 110.843561,
            "children": []
          },
          {
            "code": "140823",
            "name": "闻喜县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.220306,
            "children": []
          },
          {
            "code": "140824",
            "name": "稷山县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 110.978996,
            "children": []
          },
          {
            "code": "140825",
            "name": "新绛县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.225205,
            "children": []
          },
          {
            "code": "140826",
            "name": "绛县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.576182,
            "children": []
          },
          {
            "code": "140827",
            "name": "垣曲县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.67099,
            "children": []
          },
          {
            "code": "140828",
            "name": "夏县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.223174,
            "children": []
          },
          {
            "code": "140829",
            "name": "平陆县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 111.212377,
            "children": []
          },
          {
            "code": "140830",
            "name": "芮城县",
            "level": "district",
            "parentCode": "140800",
            "longitude": 110.69114,
            "children": []
          },
          {
            "code": "140881",
            "name": "永济市",
            "level": "district",
            "parentCode": "140800",
            "longitude": 110.447984,
            "children": []
          },
          {
            "code": "140882",
            "name": "河津市",
            "level": "district",
            "parentCode": "140800",
            "longitude": 110.710268,
            "children": []
          }
        ]
      },
      {
        "code": "140900",
        "name": "忻州市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 112.733538,
        "children": [
          {
            "code": "140902",
            "name": "忻府区",
            "level": "district",
            "parentCode": "140900",
            "longitude": 112.734112,
            "children": []
          },
          {
            "code": "140921",
            "name": "定襄县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 112.963231,
            "children": []
          },
          {
            "code": "140922",
            "name": "五台县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 113.259012,
            "children": []
          },
          {
            "code": "140923",
            "name": "代县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 112.962519,
            "children": []
          },
          {
            "code": "140924",
            "name": "繁峙县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 113.267707,
            "children": []
          },
          {
            "code": "140925",
            "name": "宁武县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 112.307936,
            "children": []
          },
          {
            "code": "140926",
            "name": "静乐县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 111.940231,
            "children": []
          },
          {
            "code": "140927",
            "name": "神池县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 112.200438,
            "children": []
          },
          {
            "code": "140928",
            "name": "五寨县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 111.841015,
            "children": []
          },
          {
            "code": "140929",
            "name": "岢岚县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 111.56981,
            "children": []
          },
          {
            "code": "140930",
            "name": "河曲县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 111.146609,
            "children": []
          },
          {
            "code": "140931",
            "name": "保德县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 111.085688,
            "children": []
          },
          {
            "code": "140932",
            "name": "偏关县",
            "level": "district",
            "parentCode": "140900",
            "longitude": 111.500477,
            "children": []
          },
          {
            "code": "140981",
            "name": "原平市",
            "level": "district",
            "parentCode": "140900",
            "longitude": 112.713132,
            "children": []
          }
        ]
      },
      {
        "code": "141000",
        "name": "临汾市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 111.517973,
        "children": [
          {
            "code": "141002",
            "name": "尧都区",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.522945,
            "children": []
          },
          {
            "code": "141021",
            "name": "曲沃县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.475529,
            "children": []
          },
          {
            "code": "141022",
            "name": "翼城县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.713508,
            "children": []
          },
          {
            "code": "141023",
            "name": "襄汾县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.442932,
            "children": []
          },
          {
            "code": "141024",
            "name": "洪洞县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.673692,
            "children": []
          },
          {
            "code": "141025",
            "name": "古县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.920207,
            "children": []
          },
          {
            "code": "141026",
            "name": "安泽县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 112.251372,
            "children": []
          },
          {
            "code": "141027",
            "name": "浮山县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.850039,
            "children": []
          },
          {
            "code": "141028",
            "name": "吉县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 110.682853,
            "children": []
          },
          {
            "code": "141029",
            "name": "乡宁县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 110.857365,
            "children": []
          },
          {
            "code": "141030",
            "name": "大宁县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 110.751283,
            "children": []
          },
          {
            "code": "141031",
            "name": "隰县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 110.935809,
            "children": []
          },
          {
            "code": "141032",
            "name": "永和县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 110.631276,
            "children": []
          },
          {
            "code": "141033",
            "name": "蒲县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.09733,
            "children": []
          },
          {
            "code": "141034",
            "name": "汾西县",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.563021,
            "children": []
          },
          {
            "code": "141081",
            "name": "侯马市",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.371272,
            "children": []
          },
          {
            "code": "141082",
            "name": "霍州市",
            "level": "district",
            "parentCode": "141000",
            "longitude": 111.723103,
            "children": []
          }
        ]
      },
      {
        "code": "141100",
        "name": "吕梁市",
        "level": "city",
        "parentCode": "140000",
        "longitude": 111.134335,
        "children": [
          {
            "code": "141102",
            "name": "离石区",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.134462,
            "children": []
          },
          {
            "code": "141121",
            "name": "文水县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 112.032595,
            "children": []
          },
          {
            "code": "141122",
            "name": "交城县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 112.159154,
            "children": []
          },
          {
            "code": "141123",
            "name": "兴县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.124816,
            "children": []
          },
          {
            "code": "141124",
            "name": "临县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 110.995963,
            "children": []
          },
          {
            "code": "141125",
            "name": "柳林县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 110.89613,
            "children": []
          },
          {
            "code": "141126",
            "name": "石楼县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 110.837119,
            "children": []
          },
          {
            "code": "141127",
            "name": "岚县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.671555,
            "children": []
          },
          {
            "code": "141128",
            "name": "方山县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.238885,
            "children": []
          },
          {
            "code": "141129",
            "name": "中阳县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.193319,
            "children": []
          },
          {
            "code": "141130",
            "name": "交口县",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.183188,
            "children": []
          },
          {
            "code": "141181",
            "name": "孝义市",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.781568,
            "children": []
          },
          {
            "code": "141182",
            "name": "汾阳市",
            "level": "district",
            "parentCode": "141100",
            "longitude": 111.785273,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "150000",
    "name": "内蒙古自治区",
    "level": "province",
    "longitude": 111.670801,
    "children": [
      {
        "code": "150100",
        "name": "呼和浩特市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 111.670801,
        "children": [
          {
            "code": "150102",
            "name": "新城区",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.685964,
            "children": []
          },
          {
            "code": "150103",
            "name": "回民区",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.662162,
            "children": []
          },
          {
            "code": "150104",
            "name": "玉泉区",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.66543,
            "children": []
          },
          {
            "code": "150105",
            "name": "赛罕区",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.698463,
            "children": []
          },
          {
            "code": "150121",
            "name": "土默特左旗",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.133615,
            "children": []
          },
          {
            "code": "150122",
            "name": "托克托县",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.197317,
            "children": []
          },
          {
            "code": "150123",
            "name": "和林格尔县",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.824143,
            "children": []
          },
          {
            "code": "150124",
            "name": "清水河县",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.67222,
            "children": []
          },
          {
            "code": "150125",
            "name": "武川县",
            "level": "district",
            "parentCode": "150100",
            "longitude": 111.456563,
            "children": []
          }
        ]
      },
      {
        "code": "150200",
        "name": "包头市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 109.840405,
        "children": [
          {
            "code": "150202",
            "name": "东河区",
            "level": "district",
            "parentCode": "150200",
            "longitude": 110.026895,
            "children": []
          },
          {
            "code": "150203",
            "name": "昆都仑区",
            "level": "district",
            "parentCode": "150200",
            "longitude": 109.822932,
            "children": []
          },
          {
            "code": "150204",
            "name": "青山区",
            "level": "district",
            "parentCode": "150200",
            "longitude": 109.880049,
            "children": []
          },
          {
            "code": "150205",
            "name": "石拐区",
            "level": "district",
            "parentCode": "150200",
            "longitude": 110.272565,
            "children": []
          },
          {
            "code": "150206",
            "name": "白云鄂博矿区",
            "level": "district",
            "parentCode": "150200",
            "longitude": 109.97016,
            "children": []
          },
          {
            "code": "150207",
            "name": "九原区",
            "level": "district",
            "parentCode": "150200",
            "longitude": 109.968122,
            "children": []
          },
          {
            "code": "150221",
            "name": "土默特右旗",
            "level": "district",
            "parentCode": "150200",
            "longitude": 110.526766,
            "children": []
          },
          {
            "code": "150222",
            "name": "固阳县",
            "level": "district",
            "parentCode": "150200",
            "longitude": 110.063421,
            "children": []
          },
          {
            "code": "150223",
            "name": "达尔罕茂明安联合旗",
            "level": "district",
            "parentCode": "150200",
            "longitude": 110.438452,
            "children": []
          }
        ]
      },
      {
        "code": "150300",
        "name": "乌海市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 106.825563,
        "children": [
          {
            "code": "150302",
            "name": "海勃湾区",
            "level": "district",
            "parentCode": "150300",
            "longitude": 106.817762,
            "children": []
          },
          {
            "code": "150303",
            "name": "海南区",
            "level": "district",
            "parentCode": "150300",
            "longitude": 106.884789,
            "children": []
          },
          {
            "code": "150304",
            "name": "乌达区",
            "level": "district",
            "parentCode": "150300",
            "longitude": 106.722711,
            "children": []
          }
        ]
      },
      {
        "code": "150400",
        "name": "赤峰市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 118.956806,
        "children": [
          {
            "code": "150402",
            "name": "红山区",
            "level": "district",
            "parentCode": "150400",
            "longitude": 118.961087,
            "children": []
          },
          {
            "code": "150403",
            "name": "元宝山区",
            "level": "district",
            "parentCode": "150400",
            "longitude": 119.289877,
            "children": []
          },
          {
            "code": "150404",
            "name": "松山区",
            "level": "district",
            "parentCode": "150400",
            "longitude": 118.938958,
            "children": []
          },
          {
            "code": "150421",
            "name": "阿鲁科尔沁旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 120.094969,
            "children": []
          },
          {
            "code": "150422",
            "name": "巴林左旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 119.391737,
            "children": []
          },
          {
            "code": "150423",
            "name": "巴林右旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 118.678347,
            "children": []
          },
          {
            "code": "150424",
            "name": "林西县",
            "level": "district",
            "parentCode": "150400",
            "longitude": 118.05775,
            "children": []
          },
          {
            "code": "150425",
            "name": "克什克腾旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 117.542465,
            "children": []
          },
          {
            "code": "150426",
            "name": "翁牛特旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 119.022619,
            "children": []
          },
          {
            "code": "150428",
            "name": "喀喇沁旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 118.708572,
            "children": []
          },
          {
            "code": "150429",
            "name": "宁城县",
            "level": "district",
            "parentCode": "150400",
            "longitude": 119.339242,
            "children": []
          },
          {
            "code": "150430",
            "name": "敖汉旗",
            "level": "district",
            "parentCode": "150400",
            "longitude": 119.906486,
            "children": []
          }
        ]
      },
      {
        "code": "150500",
        "name": "通辽市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 122.263119,
        "children": [
          {
            "code": "150502",
            "name": "科尔沁区",
            "level": "district",
            "parentCode": "150500",
            "longitude": 122.264042,
            "children": []
          },
          {
            "code": "150521",
            "name": "科尔沁左翼中旗",
            "level": "district",
            "parentCode": "150500",
            "longitude": 123.313873,
            "children": []
          },
          {
            "code": "150522",
            "name": "科尔沁左翼后旗",
            "level": "district",
            "parentCode": "150500",
            "longitude": 122.355155,
            "children": []
          },
          {
            "code": "150523",
            "name": "开鲁县",
            "level": "district",
            "parentCode": "150500",
            "longitude": 121.308797,
            "children": []
          },
          {
            "code": "150524",
            "name": "库伦旗",
            "level": "district",
            "parentCode": "150500",
            "longitude": 121.774886,
            "children": []
          },
          {
            "code": "150525",
            "name": "奈曼旗",
            "level": "district",
            "parentCode": "150500",
            "longitude": 120.662543,
            "children": []
          },
          {
            "code": "150526",
            "name": "扎鲁特旗",
            "level": "district",
            "parentCode": "150500",
            "longitude": 120.905275,
            "children": []
          },
          {
            "code": "150581",
            "name": "霍林郭勒市",
            "level": "district",
            "parentCode": "150500",
            "longitude": 119.657862,
            "children": []
          }
        ]
      },
      {
        "code": "150600",
        "name": "鄂尔多斯市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 109.99029,
        "children": [
          {
            "code": "150602",
            "name": "东胜区",
            "level": "district",
            "parentCode": "150600",
            "longitude": 109.98945,
            "children": []
          },
          {
            "code": "150603",
            "name": "康巴什区",
            "level": "district",
            "parentCode": "150600",
            "longitude": 109.790076,
            "children": []
          },
          {
            "code": "150621",
            "name": "达拉特旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 110.040281,
            "children": []
          },
          {
            "code": "150622",
            "name": "准格尔旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 111.238332,
            "children": []
          },
          {
            "code": "150623",
            "name": "鄂托克前旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 107.48172,
            "children": []
          },
          {
            "code": "150624",
            "name": "鄂托克旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 107.982604,
            "children": []
          },
          {
            "code": "150625",
            "name": "杭锦旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 108.736324,
            "children": []
          },
          {
            "code": "150626",
            "name": "乌审旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 108.842454,
            "children": []
          },
          {
            "code": "150627",
            "name": "伊金霍洛旗",
            "level": "district",
            "parentCode": "150600",
            "longitude": 109.787402,
            "children": []
          }
        ]
      },
      {
        "code": "150700",
        "name": "呼伦贝尔市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 119.758168,
        "children": [
          {
            "code": "150702",
            "name": "海拉尔区",
            "level": "district",
            "parentCode": "150700",
            "longitude": 119.764923,
            "children": []
          },
          {
            "code": "150703",
            "name": "扎赉诺尔区",
            "level": "district",
            "parentCode": "150700",
            "longitude": 117.716373,
            "children": []
          },
          {
            "code": "150721",
            "name": "阿荣旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 123.464615,
            "children": []
          },
          {
            "code": "150722",
            "name": "莫力达瓦达斡尔族自治旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 124.507401,
            "children": []
          },
          {
            "code": "150723",
            "name": "鄂伦春自治旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 123.725684,
            "children": []
          },
          {
            "code": "150724",
            "name": "鄂温克族自治旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 119.754041,
            "children": []
          },
          {
            "code": "150725",
            "name": "陈巴尔虎旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 119.437609,
            "children": []
          },
          {
            "code": "150726",
            "name": "新巴尔虎左旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 118.267454,
            "children": []
          },
          {
            "code": "150727",
            "name": "新巴尔虎右旗",
            "level": "district",
            "parentCode": "150700",
            "longitude": 116.825991,
            "children": []
          },
          {
            "code": "150781",
            "name": "满洲里市",
            "level": "district",
            "parentCode": "150700",
            "longitude": 117.455561,
            "children": []
          },
          {
            "code": "150782",
            "name": "牙克石市",
            "level": "district",
            "parentCode": "150700",
            "longitude": 120.729005,
            "children": []
          },
          {
            "code": "150783",
            "name": "扎兰屯市",
            "level": "district",
            "parentCode": "150700",
            "longitude": 122.744401,
            "children": []
          },
          {
            "code": "150784",
            "name": "额尔古纳市",
            "level": "district",
            "parentCode": "150700",
            "longitude": 120.178636,
            "children": []
          },
          {
            "code": "150785",
            "name": "根河市",
            "level": "district",
            "parentCode": "150700",
            "longitude": 121.532724,
            "children": []
          }
        ]
      },
      {
        "code": "150800",
        "name": "巴彦淖尔市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 107.416959,
        "children": [
          {
            "code": "150802",
            "name": "临河区",
            "level": "district",
            "parentCode": "150800",
            "longitude": 107.417018,
            "children": []
          },
          {
            "code": "150821",
            "name": "五原县",
            "level": "district",
            "parentCode": "150800",
            "longitude": 108.270658,
            "children": []
          },
          {
            "code": "150822",
            "name": "磴口县",
            "level": "district",
            "parentCode": "150800",
            "longitude": 107.006056,
            "children": []
          },
          {
            "code": "150823",
            "name": "乌拉特前旗",
            "level": "district",
            "parentCode": "150800",
            "longitude": 108.656816,
            "children": []
          },
          {
            "code": "150824",
            "name": "乌拉特中旗",
            "level": "district",
            "parentCode": "150800",
            "longitude": 108.515255,
            "children": []
          },
          {
            "code": "150825",
            "name": "乌拉特后旗",
            "level": "district",
            "parentCode": "150800",
            "longitude": 107.074941,
            "children": []
          },
          {
            "code": "150826",
            "name": "杭锦后旗",
            "level": "district",
            "parentCode": "150800",
            "longitude": 107.147682,
            "children": []
          }
        ]
      },
      {
        "code": "150900",
        "name": "乌兰察布市",
        "level": "city",
        "parentCode": "150000",
        "longitude": 113.114543,
        "children": [
          {
            "code": "150902",
            "name": "集宁区",
            "level": "district",
            "parentCode": "150900",
            "longitude": 113.116453,
            "children": []
          },
          {
            "code": "150921",
            "name": "卓资县",
            "level": "district",
            "parentCode": "150900",
            "longitude": 112.577702,
            "children": []
          },
          {
            "code": "150922",
            "name": "化德县",
            "level": "district",
            "parentCode": "150900",
            "longitude": 114.01008,
            "children": []
          },
          {
            "code": "150923",
            "name": "商都县",
            "level": "district",
            "parentCode": "150900",
            "longitude": 113.560643,
            "children": []
          },
          {
            "code": "150924",
            "name": "兴和县",
            "level": "district",
            "parentCode": "150900",
            "longitude": 113.834009,
            "children": []
          },
          {
            "code": "150925",
            "name": "凉城县",
            "level": "district",
            "parentCode": "150900",
            "longitude": 112.500911,
            "children": []
          },
          {
            "code": "150926",
            "name": "察哈尔右翼前旗",
            "level": "district",
            "parentCode": "150900",
            "longitude": 113.211958,
            "children": []
          },
          {
            "code": "150927",
            "name": "察哈尔右翼中旗",
            "level": "district",
            "parentCode": "150900",
            "longitude": 112.633563,
            "children": []
          },
          {
            "code": "150928",
            "name": "察哈尔右翼后旗",
            "level": "district",
            "parentCode": "150900",
            "longitude": 113.1906,
            "children": []
          },
          {
            "code": "150929",
            "name": "四子王旗",
            "level": "district",
            "parentCode": "150900",
            "longitude": 111.70123,
            "children": []
          },
          {
            "code": "150981",
            "name": "丰镇市",
            "level": "district",
            "parentCode": "150900",
            "longitude": 113.163462,
            "children": []
          }
        ]
      },
      {
        "code": "152200",
        "name": "兴安盟",
        "level": "city",
        "parentCode": "150000",
        "longitude": 122.070317,
        "children": [
          {
            "code": "152201",
            "name": "乌兰浩特市",
            "level": "district",
            "parentCode": "152200",
            "longitude": 122.068975,
            "children": []
          },
          {
            "code": "152202",
            "name": "阿尔山市",
            "level": "district",
            "parentCode": "152200",
            "longitude": 119.943656,
            "children": []
          },
          {
            "code": "152221",
            "name": "科尔沁右翼前旗",
            "level": "district",
            "parentCode": "152200",
            "longitude": 121.957544,
            "children": []
          },
          {
            "code": "152222",
            "name": "科尔沁右翼中旗",
            "level": "district",
            "parentCode": "152200",
            "longitude": 121.472818,
            "children": []
          },
          {
            "code": "152223",
            "name": "扎赉特旗",
            "level": "district",
            "parentCode": "152200",
            "longitude": 122.909332,
            "children": []
          },
          {
            "code": "152224",
            "name": "突泉县",
            "level": "district",
            "parentCode": "152200",
            "longitude": 121.564856,
            "children": []
          }
        ]
      },
      {
        "code": "152500",
        "name": "锡林郭勒盟",
        "level": "city",
        "parentCode": "150000",
        "longitude": 116.090996,
        "children": [
          {
            "code": "152501",
            "name": "二连浩特市",
            "level": "district",
            "parentCode": "152500",
            "longitude": 111.97981,
            "children": []
          },
          {
            "code": "152502",
            "name": "锡林浩特市",
            "level": "district",
            "parentCode": "152500",
            "longitude": 116.091903,
            "children": []
          },
          {
            "code": "152522",
            "name": "阿巴嘎旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 114.970618,
            "children": []
          },
          {
            "code": "152523",
            "name": "苏尼特左旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 113.653412,
            "children": []
          },
          {
            "code": "152524",
            "name": "苏尼特右旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 112.65539,
            "children": []
          },
          {
            "code": "152525",
            "name": "东乌珠穆沁旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 116.980022,
            "children": []
          },
          {
            "code": "152526",
            "name": "西乌珠穆沁旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 117.615249,
            "children": []
          },
          {
            "code": "152527",
            "name": "太仆寺旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 115.28728,
            "children": []
          },
          {
            "code": "152528",
            "name": "镶黄旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 113.843869,
            "children": []
          },
          {
            "code": "152529",
            "name": "正镶白旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 115.031423,
            "children": []
          },
          {
            "code": "152530",
            "name": "正蓝旗",
            "level": "district",
            "parentCode": "152500",
            "longitude": 116.003311,
            "children": []
          },
          {
            "code": "152531",
            "name": "多伦县",
            "level": "district",
            "parentCode": "152500",
            "longitude": 116.477288,
            "children": []
          }
        ]
      },
      {
        "code": "152900",
        "name": "阿拉善盟",
        "level": "city",
        "parentCode": "150000",
        "longitude": 105.706422,
        "children": [
          {
            "code": "152921",
            "name": "阿拉善左旗",
            "level": "district",
            "parentCode": "152900",
            "longitude": 105.70192,
            "children": []
          },
          {
            "code": "152922",
            "name": "阿拉善右旗",
            "level": "district",
            "parentCode": "152900",
            "longitude": 101.671984,
            "children": []
          },
          {
            "code": "152923",
            "name": "额济纳旗",
            "level": "district",
            "parentCode": "152900",
            "longitude": 101.06944,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "210000",
    "name": "辽宁省",
    "level": "province",
    "longitude": 123.429096,
    "children": [
      {
        "code": "210100",
        "name": "沈阳市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 123.429096,
        "children": [
          {
            "code": "210102",
            "name": "和平区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.406664,
            "children": []
          },
          {
            "code": "210103",
            "name": "沈河区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.445696,
            "children": []
          },
          {
            "code": "210104",
            "name": "大东区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.469956,
            "children": []
          },
          {
            "code": "210105",
            "name": "皇姑区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.405677,
            "children": []
          },
          {
            "code": "210106",
            "name": "铁西区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.350664,
            "children": []
          },
          {
            "code": "210111",
            "name": "苏家屯区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.341604,
            "children": []
          },
          {
            "code": "210112",
            "name": "浑南区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.458981,
            "children": []
          },
          {
            "code": "210113",
            "name": "沈北新区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.521471,
            "children": []
          },
          {
            "code": "210114",
            "name": "于洪区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.310829,
            "children": []
          },
          {
            "code": "210115",
            "name": "辽中区",
            "level": "district",
            "parentCode": "210100",
            "longitude": 122.731269,
            "children": []
          },
          {
            "code": "210123",
            "name": "康平县",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.352703,
            "children": []
          },
          {
            "code": "210124",
            "name": "法库县",
            "level": "district",
            "parentCode": "210100",
            "longitude": 123.416722,
            "children": []
          },
          {
            "code": "210181",
            "name": "新民市",
            "level": "district",
            "parentCode": "210100",
            "longitude": 122.828868,
            "children": []
          }
        ]
      },
      {
        "code": "210200",
        "name": "大连市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 121.618622,
        "children": [
          {
            "code": "210202",
            "name": "中山区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.64376,
            "children": []
          },
          {
            "code": "210203",
            "name": "西岗区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.616112,
            "children": []
          },
          {
            "code": "210204",
            "name": "沙河口区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.593702,
            "children": []
          },
          {
            "code": "210211",
            "name": "甘井子区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.582614,
            "children": []
          },
          {
            "code": "210212",
            "name": "旅顺口区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.26713,
            "children": []
          },
          {
            "code": "210213",
            "name": "金州区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.789413,
            "children": []
          },
          {
            "code": "210214",
            "name": "普兰店区",
            "level": "district",
            "parentCode": "210200",
            "longitude": 121.9705,
            "children": []
          },
          {
            "code": "210224",
            "name": "长海县",
            "level": "district",
            "parentCode": "210200",
            "longitude": 122.587824,
            "children": []
          },
          {
            "code": "210281",
            "name": "瓦房店市",
            "level": "district",
            "parentCode": "210200",
            "longitude": 122.002656,
            "children": []
          },
          {
            "code": "210283",
            "name": "庄河市",
            "level": "district",
            "parentCode": "210200",
            "longitude": 122.970612,
            "children": []
          }
        ]
      },
      {
        "code": "210300",
        "name": "鞍山市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 122.995632,
        "children": [
          {
            "code": "210302",
            "name": "铁东区",
            "level": "district",
            "parentCode": "210300",
            "longitude": 122.994475,
            "children": []
          },
          {
            "code": "210303",
            "name": "铁西区",
            "level": "district",
            "parentCode": "210300",
            "longitude": 122.971834,
            "children": []
          },
          {
            "code": "210304",
            "name": "立山区",
            "level": "district",
            "parentCode": "210300",
            "longitude": 123.024806,
            "children": []
          },
          {
            "code": "210311",
            "name": "千山区",
            "level": "district",
            "parentCode": "210300",
            "longitude": 122.949298,
            "children": []
          },
          {
            "code": "210321",
            "name": "台安县",
            "level": "district",
            "parentCode": "210300",
            "longitude": 122.429736,
            "children": []
          },
          {
            "code": "210323",
            "name": "岫岩满族自治县",
            "level": "district",
            "parentCode": "210300",
            "longitude": 123.28833,
            "children": []
          },
          {
            "code": "210381",
            "name": "海城市",
            "level": "district",
            "parentCode": "210300",
            "longitude": 122.752199,
            "children": []
          }
        ]
      },
      {
        "code": "210400",
        "name": "抚顺市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 123.921109,
        "children": [
          {
            "code": "210402",
            "name": "新抚区",
            "level": "district",
            "parentCode": "210400",
            "longitude": 123.902858,
            "children": []
          },
          {
            "code": "210403",
            "name": "东洲区",
            "level": "district",
            "parentCode": "210400",
            "longitude": 124.047219,
            "children": []
          },
          {
            "code": "210404",
            "name": "望花区",
            "level": "district",
            "parentCode": "210400",
            "longitude": 123.801509,
            "children": []
          },
          {
            "code": "210411",
            "name": "顺城区",
            "level": "district",
            "parentCode": "210400",
            "longitude": 123.917165,
            "children": []
          },
          {
            "code": "210421",
            "name": "抚顺县",
            "level": "district",
            "parentCode": "210400",
            "longitude": 124.097979,
            "children": []
          },
          {
            "code": "210422",
            "name": "新宾满族自治县",
            "level": "district",
            "parentCode": "210400",
            "longitude": 125.037547,
            "children": []
          },
          {
            "code": "210423",
            "name": "清原满族自治县",
            "level": "district",
            "parentCode": "210400",
            "longitude": 124.927192,
            "children": []
          }
        ]
      },
      {
        "code": "210500",
        "name": "本溪市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 123.770519,
        "children": [
          {
            "code": "210502",
            "name": "平山区",
            "level": "district",
            "parentCode": "210500",
            "longitude": 123.761231,
            "children": []
          },
          {
            "code": "210503",
            "name": "溪湖区",
            "level": "district",
            "parentCode": "210500",
            "longitude": 123.765226,
            "children": []
          },
          {
            "code": "210504",
            "name": "明山区",
            "level": "district",
            "parentCode": "210500",
            "longitude": 123.763288,
            "children": []
          },
          {
            "code": "210505",
            "name": "南芬区",
            "level": "district",
            "parentCode": "210500",
            "longitude": 123.748381,
            "children": []
          },
          {
            "code": "210521",
            "name": "本溪满族自治县",
            "level": "district",
            "parentCode": "210500",
            "longitude": 124.126156,
            "children": []
          },
          {
            "code": "210522",
            "name": "桓仁满族自治县",
            "level": "district",
            "parentCode": "210500",
            "longitude": 125.359195,
            "children": []
          }
        ]
      },
      {
        "code": "210600",
        "name": "丹东市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 124.383044,
        "children": [
          {
            "code": "210602",
            "name": "元宝区",
            "level": "district",
            "parentCode": "210600",
            "longitude": 124.397814,
            "children": []
          },
          {
            "code": "210603",
            "name": "振兴区",
            "level": "district",
            "parentCode": "210600",
            "longitude": 124.361153,
            "children": []
          },
          {
            "code": "210604",
            "name": "振安区",
            "level": "district",
            "parentCode": "210600",
            "longitude": 124.427709,
            "children": []
          },
          {
            "code": "210624",
            "name": "宽甸满族自治县",
            "level": "district",
            "parentCode": "210600",
            "longitude": 124.784867,
            "children": []
          },
          {
            "code": "210681",
            "name": "东港市",
            "level": "district",
            "parentCode": "210600",
            "longitude": 124.149437,
            "children": []
          },
          {
            "code": "210682",
            "name": "凤城市",
            "level": "district",
            "parentCode": "210600",
            "longitude": 124.071067,
            "children": []
          }
        ]
      },
      {
        "code": "210700",
        "name": "锦州市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 121.135742,
        "children": [
          {
            "code": "210702",
            "name": "古塔区",
            "level": "district",
            "parentCode": "210700",
            "longitude": 121.130085,
            "children": []
          },
          {
            "code": "210703",
            "name": "凌河区",
            "level": "district",
            "parentCode": "210700",
            "longitude": 121.151304,
            "children": []
          },
          {
            "code": "210711",
            "name": "太和区",
            "level": "district",
            "parentCode": "210700",
            "longitude": 121.107297,
            "children": []
          },
          {
            "code": "210726",
            "name": "黑山县",
            "level": "district",
            "parentCode": "210700",
            "longitude": 122.117915,
            "children": []
          },
          {
            "code": "210727",
            "name": "义县",
            "level": "district",
            "parentCode": "210700",
            "longitude": 121.242831,
            "children": []
          },
          {
            "code": "210781",
            "name": "凌海市",
            "level": "district",
            "parentCode": "210700",
            "longitude": 121.364236,
            "children": []
          },
          {
            "code": "210782",
            "name": "北镇市",
            "level": "district",
            "parentCode": "210700",
            "longitude": 121.795962,
            "children": []
          }
        ]
      },
      {
        "code": "210800",
        "name": "营口市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 122.235151,
        "children": [
          {
            "code": "210802",
            "name": "站前区",
            "level": "district",
            "parentCode": "210800",
            "longitude": 122.253235,
            "children": []
          },
          {
            "code": "210803",
            "name": "西市区",
            "level": "district",
            "parentCode": "210800",
            "longitude": 122.210067,
            "children": []
          },
          {
            "code": "210804",
            "name": "鲅鱼圈区",
            "level": "district",
            "parentCode": "210800",
            "longitude": 122.127242,
            "children": []
          },
          {
            "code": "210811",
            "name": "老边区",
            "level": "district",
            "parentCode": "210800",
            "longitude": 122.382584,
            "children": []
          },
          {
            "code": "210881",
            "name": "盖州市",
            "level": "district",
            "parentCode": "210800",
            "longitude": 122.355534,
            "children": []
          },
          {
            "code": "210882",
            "name": "大石桥市",
            "level": "district",
            "parentCode": "210800",
            "longitude": 122.505894,
            "children": []
          }
        ]
      },
      {
        "code": "210900",
        "name": "阜新市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 121.648962,
        "children": [
          {
            "code": "210902",
            "name": "海州区",
            "level": "district",
            "parentCode": "210900",
            "longitude": 121.657639,
            "children": []
          },
          {
            "code": "210903",
            "name": "新邱区",
            "level": "district",
            "parentCode": "210900",
            "longitude": 121.790541,
            "children": []
          },
          {
            "code": "210904",
            "name": "太平区",
            "level": "district",
            "parentCode": "210900",
            "longitude": 121.677575,
            "children": []
          },
          {
            "code": "210905",
            "name": "清河门区",
            "level": "district",
            "parentCode": "210900",
            "longitude": 121.42018,
            "children": []
          },
          {
            "code": "210911",
            "name": "细河区",
            "level": "district",
            "parentCode": "210900",
            "longitude": 121.654791,
            "children": []
          },
          {
            "code": "210921",
            "name": "阜新蒙古族自治县",
            "level": "district",
            "parentCode": "210900",
            "longitude": 121.743125,
            "children": []
          },
          {
            "code": "210922",
            "name": "彰武县",
            "level": "district",
            "parentCode": "210900",
            "longitude": 122.537444,
            "children": []
          }
        ]
      },
      {
        "code": "211000",
        "name": "辽阳市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 123.18152,
        "children": [
          {
            "code": "211002",
            "name": "白塔区",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.172611,
            "children": []
          },
          {
            "code": "211003",
            "name": "文圣区",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.188227,
            "children": []
          },
          {
            "code": "211004",
            "name": "宏伟区",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.200461,
            "children": []
          },
          {
            "code": "211005",
            "name": "弓长岭区",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.431633,
            "children": []
          },
          {
            "code": "211011",
            "name": "太子河区",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.185336,
            "children": []
          },
          {
            "code": "211021",
            "name": "辽阳县",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.079674,
            "children": []
          },
          {
            "code": "211081",
            "name": "灯塔市",
            "level": "district",
            "parentCode": "211000",
            "longitude": 123.325864,
            "children": []
          }
        ]
      },
      {
        "code": "211100",
        "name": "盘锦市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 122.06957,
        "children": [
          {
            "code": "211102",
            "name": "双台子区",
            "level": "district",
            "parentCode": "211100",
            "longitude": 122.055733,
            "children": []
          },
          {
            "code": "211103",
            "name": "兴隆台区",
            "level": "district",
            "parentCode": "211100",
            "longitude": 122.071624,
            "children": []
          },
          {
            "code": "211104",
            "name": "大洼区",
            "level": "district",
            "parentCode": "211100",
            "longitude": 122.071708,
            "children": []
          },
          {
            "code": "211122",
            "name": "盘山县",
            "level": "district",
            "parentCode": "211100",
            "longitude": 121.98528,
            "children": []
          }
        ]
      },
      {
        "code": "211200",
        "name": "铁岭市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 123.844279,
        "children": [
          {
            "code": "211202",
            "name": "银州区",
            "level": "district",
            "parentCode": "211200",
            "longitude": 123.844877,
            "children": []
          },
          {
            "code": "211204",
            "name": "清河区",
            "level": "district",
            "parentCode": "211200",
            "longitude": 124.14896,
            "children": []
          },
          {
            "code": "211221",
            "name": "铁岭县",
            "level": "district",
            "parentCode": "211200",
            "longitude": 123.725669,
            "children": []
          },
          {
            "code": "211223",
            "name": "西丰县",
            "level": "district",
            "parentCode": "211200",
            "longitude": 124.72332,
            "children": []
          },
          {
            "code": "211224",
            "name": "昌图县",
            "level": "district",
            "parentCode": "211200",
            "longitude": 124.11017,
            "children": []
          },
          {
            "code": "211281",
            "name": "调兵山市",
            "level": "district",
            "parentCode": "211200",
            "longitude": 123.545366,
            "children": []
          },
          {
            "code": "211282",
            "name": "开原市",
            "level": "district",
            "parentCode": "211200",
            "longitude": 124.045551,
            "children": []
          }
        ]
      },
      {
        "code": "211300",
        "name": "朝阳市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 120.451176,
        "children": [
          {
            "code": "211302",
            "name": "双塔区",
            "level": "district",
            "parentCode": "211300",
            "longitude": 120.44877,
            "children": []
          },
          {
            "code": "211303",
            "name": "龙城区",
            "level": "district",
            "parentCode": "211300",
            "longitude": 120.413376,
            "children": []
          },
          {
            "code": "211321",
            "name": "朝阳县",
            "level": "district",
            "parentCode": "211300",
            "longitude": 120.404217,
            "children": []
          },
          {
            "code": "211322",
            "name": "建平县",
            "level": "district",
            "parentCode": "211300",
            "longitude": 119.642363,
            "children": []
          },
          {
            "code": "211324",
            "name": "喀喇沁左翼蒙古族自治县",
            "level": "district",
            "parentCode": "211300",
            "longitude": 119.744883,
            "children": []
          },
          {
            "code": "211381",
            "name": "北票市",
            "level": "district",
            "parentCode": "211300",
            "longitude": 120.766951,
            "children": []
          },
          {
            "code": "211382",
            "name": "凌源市",
            "level": "district",
            "parentCode": "211300",
            "longitude": 119.404789,
            "children": []
          }
        ]
      },
      {
        "code": "211400",
        "name": "葫芦岛市",
        "level": "city",
        "parentCode": "210000",
        "longitude": 120.856394,
        "children": [
          {
            "code": "211402",
            "name": "连山区",
            "level": "district",
            "parentCode": "211400",
            "longitude": 120.85937,
            "children": []
          },
          {
            "code": "211403",
            "name": "龙港区",
            "level": "district",
            "parentCode": "211400",
            "longitude": 120.838569,
            "children": []
          },
          {
            "code": "211404",
            "name": "南票区",
            "level": "district",
            "parentCode": "211400",
            "longitude": 120.752314,
            "children": []
          },
          {
            "code": "211421",
            "name": "绥中县",
            "level": "district",
            "parentCode": "211400",
            "longitude": 120.342112,
            "children": []
          },
          {
            "code": "211422",
            "name": "建昌县",
            "level": "district",
            "parentCode": "211400",
            "longitude": 119.807776,
            "children": []
          },
          {
            "code": "211481",
            "name": "兴城市",
            "level": "district",
            "parentCode": "211400",
            "longitude": 120.729365,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "220000",
    "name": "吉林省",
    "level": "province",
    "longitude": 125.3245,
    "children": [
      {
        "code": "220100",
        "name": "长春市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 125.3245,
        "children": [
          {
            "code": "220102",
            "name": "南关区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.337237,
            "children": []
          },
          {
            "code": "220103",
            "name": "宽城区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.342828,
            "children": []
          },
          {
            "code": "220104",
            "name": "朝阳区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.318042,
            "children": []
          },
          {
            "code": "220105",
            "name": "二道区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.384727,
            "children": []
          },
          {
            "code": "220106",
            "name": "绿园区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.272467,
            "children": []
          },
          {
            "code": "220112",
            "name": "双阳区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.659018,
            "children": []
          },
          {
            "code": "220113",
            "name": "九台区",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.844682,
            "children": []
          },
          {
            "code": "220122",
            "name": "农安县",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.175287,
            "children": []
          },
          {
            "code": "220182",
            "name": "榆树市",
            "level": "district",
            "parentCode": "220100",
            "longitude": 126.550107,
            "children": []
          },
          {
            "code": "220183",
            "name": "德惠市",
            "level": "district",
            "parentCode": "220100",
            "longitude": 125.703327,
            "children": []
          },
          {
            "code": "220184",
            "name": "公主岭市",
            "level": "district",
            "parentCode": "220100",
            "longitude": 124.817588,
            "children": []
          }
        ]
      },
      {
        "code": "220200",
        "name": "吉林市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 126.55302,
        "children": [
          {
            "code": "220202",
            "name": "昌邑区",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.570766,
            "children": []
          },
          {
            "code": "220203",
            "name": "龙潭区",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.561429,
            "children": []
          },
          {
            "code": "220204",
            "name": "船营区",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.55239,
            "children": []
          },
          {
            "code": "220211",
            "name": "丰满区",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.560759,
            "children": []
          },
          {
            "code": "220221",
            "name": "永吉县",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.501622,
            "children": []
          },
          {
            "code": "220281",
            "name": "蛟河市",
            "level": "district",
            "parentCode": "220200",
            "longitude": 127.342739,
            "children": []
          },
          {
            "code": "220282",
            "name": "桦甸市",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.745445,
            "children": []
          },
          {
            "code": "220283",
            "name": "舒兰市",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.947813,
            "children": []
          },
          {
            "code": "220284",
            "name": "磐石市",
            "level": "district",
            "parentCode": "220200",
            "longitude": 126.059929,
            "children": []
          }
        ]
      },
      {
        "code": "220300",
        "name": "四平市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 124.370785,
        "children": [
          {
            "code": "220302",
            "name": "铁西区",
            "level": "district",
            "parentCode": "220300",
            "longitude": 124.360894,
            "children": []
          },
          {
            "code": "220303",
            "name": "铁东区",
            "level": "district",
            "parentCode": "220300",
            "longitude": 124.388464,
            "children": []
          },
          {
            "code": "220322",
            "name": "梨树县",
            "level": "district",
            "parentCode": "220300",
            "longitude": 124.335802,
            "children": []
          },
          {
            "code": "220323",
            "name": "伊通满族自治县",
            "level": "district",
            "parentCode": "220300",
            "longitude": 125.303124,
            "children": []
          },
          {
            "code": "220382",
            "name": "双辽市",
            "level": "district",
            "parentCode": "220300",
            "longitude": 123.505283,
            "children": []
          }
        ]
      },
      {
        "code": "220400",
        "name": "辽源市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 125.145349,
        "children": [
          {
            "code": "220402",
            "name": "龙山区",
            "level": "district",
            "parentCode": "220400",
            "longitude": 125.145164,
            "children": []
          },
          {
            "code": "220403",
            "name": "西安区",
            "level": "district",
            "parentCode": "220400",
            "longitude": 125.151424,
            "children": []
          },
          {
            "code": "220421",
            "name": "东丰县",
            "level": "district",
            "parentCode": "220400",
            "longitude": 125.529623,
            "children": []
          },
          {
            "code": "220422",
            "name": "东辽县",
            "level": "district",
            "parentCode": "220400",
            "longitude": 124.991995,
            "children": []
          }
        ]
      },
      {
        "code": "220500",
        "name": "通化市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 125.936501,
        "children": [
          {
            "code": "220502",
            "name": "东昌区",
            "level": "district",
            "parentCode": "220500",
            "longitude": 125.936716,
            "children": []
          },
          {
            "code": "220503",
            "name": "二道江区",
            "level": "district",
            "parentCode": "220500",
            "longitude": 126.045987,
            "children": []
          },
          {
            "code": "220521",
            "name": "通化县",
            "level": "district",
            "parentCode": "220500",
            "longitude": 125.753121,
            "children": []
          },
          {
            "code": "220523",
            "name": "辉南县",
            "level": "district",
            "parentCode": "220500",
            "longitude": 126.042821,
            "children": []
          },
          {
            "code": "220524",
            "name": "柳河县",
            "level": "district",
            "parentCode": "220500",
            "longitude": 125.740536,
            "children": []
          },
          {
            "code": "220581",
            "name": "梅河口市",
            "level": "district",
            "parentCode": "220500",
            "longitude": 125.687336,
            "children": []
          },
          {
            "code": "220582",
            "name": "集安市",
            "level": "district",
            "parentCode": "220500",
            "longitude": 126.186204,
            "children": []
          }
        ]
      },
      {
        "code": "220600",
        "name": "白山市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 126.427839,
        "children": [
          {
            "code": "220602",
            "name": "浑江区",
            "level": "district",
            "parentCode": "220600",
            "longitude": 126.428035,
            "children": []
          },
          {
            "code": "220605",
            "name": "江源区",
            "level": "district",
            "parentCode": "220600",
            "longitude": 126.584229,
            "children": []
          },
          {
            "code": "220621",
            "name": "抚松县",
            "level": "district",
            "parentCode": "220600",
            "longitude": 127.273796,
            "children": []
          },
          {
            "code": "220622",
            "name": "靖宇县",
            "level": "district",
            "parentCode": "220600",
            "longitude": 126.808386,
            "children": []
          },
          {
            "code": "220623",
            "name": "长白朝鲜族自治县",
            "level": "district",
            "parentCode": "220600",
            "longitude": 128.203384,
            "children": []
          },
          {
            "code": "220681",
            "name": "临江市",
            "level": "district",
            "parentCode": "220600",
            "longitude": 126.919296,
            "children": []
          }
        ]
      },
      {
        "code": "220700",
        "name": "松原市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 124.823608,
        "children": [
          {
            "code": "220702",
            "name": "宁江区",
            "level": "district",
            "parentCode": "220700",
            "longitude": 124.827851,
            "children": []
          },
          {
            "code": "220721",
            "name": "前郭尔罗斯蒙古族自治县",
            "level": "district",
            "parentCode": "220700",
            "longitude": 124.826808,
            "children": []
          },
          {
            "code": "220722",
            "name": "长岭县",
            "level": "district",
            "parentCode": "220700",
            "longitude": 123.985184,
            "children": []
          },
          {
            "code": "220723",
            "name": "乾安县",
            "level": "district",
            "parentCode": "220700",
            "longitude": 124.024361,
            "children": []
          },
          {
            "code": "220781",
            "name": "扶余市",
            "level": "district",
            "parentCode": "220700",
            "longitude": 126.042758,
            "children": []
          }
        ]
      },
      {
        "code": "220800",
        "name": "白城市",
        "level": "city",
        "parentCode": "220000",
        "longitude": 122.841114,
        "children": [
          {
            "code": "220802",
            "name": "洮北区",
            "level": "district",
            "parentCode": "220800",
            "longitude": 122.842499,
            "children": []
          },
          {
            "code": "220821",
            "name": "镇赉县",
            "level": "district",
            "parentCode": "220800",
            "longitude": 123.202246,
            "children": []
          },
          {
            "code": "220822",
            "name": "通榆县",
            "level": "district",
            "parentCode": "220800",
            "longitude": 123.088543,
            "children": []
          },
          {
            "code": "220881",
            "name": "洮南市",
            "level": "district",
            "parentCode": "220800",
            "longitude": 122.783779,
            "children": []
          },
          {
            "code": "220882",
            "name": "大安市",
            "level": "district",
            "parentCode": "220800",
            "longitude": 124.291512,
            "children": []
          }
        ]
      },
      {
        "code": "222400",
        "name": "延边朝鲜族自治州",
        "level": "city",
        "parentCode": "220000",
        "longitude": 129.513228,
        "children": [
          {
            "code": "222401",
            "name": "延吉市",
            "level": "district",
            "parentCode": "222400",
            "longitude": 129.51579,
            "children": []
          },
          {
            "code": "222402",
            "name": "图们市",
            "level": "district",
            "parentCode": "222400",
            "longitude": 129.846701,
            "children": []
          },
          {
            "code": "222403",
            "name": "敦化市",
            "level": "district",
            "parentCode": "222400",
            "longitude": 128.22986,
            "children": []
          },
          {
            "code": "222404",
            "name": "珲春市",
            "level": "district",
            "parentCode": "222400",
            "longitude": 130.365787,
            "children": []
          },
          {
            "code": "222405",
            "name": "龙井市",
            "level": "district",
            "parentCode": "222400",
            "longitude": 129.425747,
            "children": []
          },
          {
            "code": "222406",
            "name": "和龙市",
            "level": "district",
            "parentCode": "222400",
            "longitude": 129.008748,
            "children": []
          },
          {
            "code": "222424",
            "name": "汪清县",
            "level": "district",
            "parentCode": "222400",
            "longitude": 129.766161,
            "children": []
          },
          {
            "code": "222426",
            "name": "安图县",
            "level": "district",
            "parentCode": "222400",
            "longitude": 128.901865,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "230000",
    "name": "黑龙江省",
    "level": "province",
    "longitude": 126.642464,
    "children": [
      {
        "code": "230100",
        "name": "哈尔滨市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 126.642464,
        "children": [
          {
            "code": "230102",
            "name": "道里区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.612532,
            "children": []
          },
          {
            "code": "230103",
            "name": "南岗区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.652098,
            "children": []
          },
          {
            "code": "230104",
            "name": "道外区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.648838,
            "children": []
          },
          {
            "code": "230108",
            "name": "平房区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.629257,
            "children": []
          },
          {
            "code": "230109",
            "name": "松北区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.563066,
            "children": []
          },
          {
            "code": "230110",
            "name": "香坊区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.667049,
            "children": []
          },
          {
            "code": "230111",
            "name": "呼兰区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.603302,
            "children": []
          },
          {
            "code": "230112",
            "name": "阿城区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.972726,
            "children": []
          },
          {
            "code": "230113",
            "name": "双城区",
            "level": "district",
            "parentCode": "230100",
            "longitude": 126.308784,
            "children": []
          },
          {
            "code": "230123",
            "name": "依兰县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 129.565594,
            "children": []
          },
          {
            "code": "230124",
            "name": "方正县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 128.836131,
            "children": []
          },
          {
            "code": "230125",
            "name": "宾县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 127.48594,
            "children": []
          },
          {
            "code": "230126",
            "name": "巴彦县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 127.403602,
            "children": []
          },
          {
            "code": "230127",
            "name": "木兰县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 128.042675,
            "children": []
          },
          {
            "code": "230128",
            "name": "通河县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 128.747786,
            "children": []
          },
          {
            "code": "230129",
            "name": "延寿县",
            "level": "district",
            "parentCode": "230100",
            "longitude": 128.331886,
            "children": []
          },
          {
            "code": "230183",
            "name": "尚志市",
            "level": "district",
            "parentCode": "230100",
            "longitude": 127.968539,
            "children": []
          },
          {
            "code": "230184",
            "name": "五常市",
            "level": "district",
            "parentCode": "230100",
            "longitude": 127.15759,
            "children": []
          }
        ]
      },
      {
        "code": "230200",
        "name": "齐齐哈尔市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 123.95792,
        "children": [
          {
            "code": "230202",
            "name": "龙沙区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.957338,
            "children": []
          },
          {
            "code": "230203",
            "name": "建华区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.955888,
            "children": []
          },
          {
            "code": "230204",
            "name": "铁锋区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.973555,
            "children": []
          },
          {
            "code": "230205",
            "name": "昂昂溪区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.813181,
            "children": []
          },
          {
            "code": "230206",
            "name": "富拉尔基区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.638873,
            "children": []
          },
          {
            "code": "230207",
            "name": "碾子山区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 122.887972,
            "children": []
          },
          {
            "code": "230208",
            "name": "梅里斯达斡尔族区",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.754599,
            "children": []
          },
          {
            "code": "230221",
            "name": "龙江县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.187225,
            "children": []
          },
          {
            "code": "230223",
            "name": "依安县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 125.307561,
            "children": []
          },
          {
            "code": "230224",
            "name": "泰来县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.41953,
            "children": []
          },
          {
            "code": "230225",
            "name": "甘南县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 123.506034,
            "children": []
          },
          {
            "code": "230227",
            "name": "富裕县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 124.469106,
            "children": []
          },
          {
            "code": "230229",
            "name": "克山县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 125.874355,
            "children": []
          },
          {
            "code": "230230",
            "name": "克东县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 126.249094,
            "children": []
          },
          {
            "code": "230231",
            "name": "拜泉县",
            "level": "district",
            "parentCode": "230200",
            "longitude": 126.091911,
            "children": []
          },
          {
            "code": "230281",
            "name": "讷河市",
            "level": "district",
            "parentCode": "230200",
            "longitude": 124.882172,
            "children": []
          }
        ]
      },
      {
        "code": "230300",
        "name": "鸡西市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 130.975966,
        "children": [
          {
            "code": "230302",
            "name": "鸡冠区",
            "level": "district",
            "parentCode": "230300",
            "longitude": 130.974374,
            "children": []
          },
          {
            "code": "230303",
            "name": "恒山区",
            "level": "district",
            "parentCode": "230300",
            "longitude": 130.910636,
            "children": []
          },
          {
            "code": "230304",
            "name": "滴道区",
            "level": "district",
            "parentCode": "230300",
            "longitude": 130.846823,
            "children": []
          },
          {
            "code": "230305",
            "name": "梨树区",
            "level": "district",
            "parentCode": "230300",
            "longitude": 130.697781,
            "children": []
          },
          {
            "code": "230306",
            "name": "城子河区",
            "level": "district",
            "parentCode": "230300",
            "longitude": 131.010501,
            "children": []
          },
          {
            "code": "230307",
            "name": "麻山区",
            "level": "district",
            "parentCode": "230300",
            "longitude": 130.481126,
            "children": []
          },
          {
            "code": "230321",
            "name": "鸡东县",
            "level": "district",
            "parentCode": "230300",
            "longitude": 131.148907,
            "children": []
          },
          {
            "code": "230381",
            "name": "虎林市",
            "level": "district",
            "parentCode": "230300",
            "longitude": 132.973881,
            "children": []
          },
          {
            "code": "230382",
            "name": "密山市",
            "level": "district",
            "parentCode": "230300",
            "longitude": 131.874137,
            "children": []
          }
        ]
      },
      {
        "code": "230400",
        "name": "鹤岗市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 130.277487,
        "children": [
          {
            "code": "230402",
            "name": "向阳区",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.292478,
            "children": []
          },
          {
            "code": "230403",
            "name": "工农区",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.276652,
            "children": []
          },
          {
            "code": "230404",
            "name": "南山区",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.275533,
            "children": []
          },
          {
            "code": "230405",
            "name": "兴安区",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.236169,
            "children": []
          },
          {
            "code": "230406",
            "name": "东山区",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.31714,
            "children": []
          },
          {
            "code": "230407",
            "name": "兴山区",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.30534,
            "children": []
          },
          {
            "code": "230421",
            "name": "萝北县",
            "level": "district",
            "parentCode": "230400",
            "longitude": 130.829087,
            "children": []
          },
          {
            "code": "230422",
            "name": "绥滨县",
            "level": "district",
            "parentCode": "230400",
            "longitude": 131.860526,
            "children": []
          }
        ]
      },
      {
        "code": "230500",
        "name": "双鸭山市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 131.157304,
        "children": [
          {
            "code": "230502",
            "name": "尖山区",
            "level": "district",
            "parentCode": "230500",
            "longitude": 131.15896,
            "children": []
          },
          {
            "code": "230503",
            "name": "岭东区",
            "level": "district",
            "parentCode": "230500",
            "longitude": 131.163675,
            "children": []
          },
          {
            "code": "230505",
            "name": "四方台区",
            "level": "district",
            "parentCode": "230500",
            "longitude": 131.333181,
            "children": []
          },
          {
            "code": "230506",
            "name": "宝山区",
            "level": "district",
            "parentCode": "230500",
            "longitude": 131.404294,
            "children": []
          },
          {
            "code": "230521",
            "name": "集贤县",
            "level": "district",
            "parentCode": "230500",
            "longitude": 131.13933,
            "children": []
          },
          {
            "code": "230522",
            "name": "友谊县",
            "level": "district",
            "parentCode": "230500",
            "longitude": 131.810622,
            "children": []
          },
          {
            "code": "230523",
            "name": "宝清县",
            "level": "district",
            "parentCode": "230500",
            "longitude": 132.206415,
            "children": []
          },
          {
            "code": "230524",
            "name": "饶河县",
            "level": "district",
            "parentCode": "230500",
            "longitude": 134.021162,
            "children": []
          }
        ]
      },
      {
        "code": "230600",
        "name": "大庆市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 125.11272,
        "children": [
          {
            "code": "230602",
            "name": "萨尔图区",
            "level": "district",
            "parentCode": "230600",
            "longitude": 125.114643,
            "children": []
          },
          {
            "code": "230603",
            "name": "龙凤区",
            "level": "district",
            "parentCode": "230600",
            "longitude": 125.145794,
            "children": []
          },
          {
            "code": "230604",
            "name": "让胡路区",
            "level": "district",
            "parentCode": "230600",
            "longitude": 124.868341,
            "children": []
          },
          {
            "code": "230605",
            "name": "红岗区",
            "level": "district",
            "parentCode": "230600",
            "longitude": 124.889528,
            "children": []
          },
          {
            "code": "230606",
            "name": "大同区",
            "level": "district",
            "parentCode": "230600",
            "longitude": 124.818509,
            "children": []
          },
          {
            "code": "230621",
            "name": "肇州县",
            "level": "district",
            "parentCode": "230600",
            "longitude": 125.273254,
            "children": []
          },
          {
            "code": "230622",
            "name": "肇源县",
            "level": "district",
            "parentCode": "230600",
            "longitude": 125.081974,
            "children": []
          },
          {
            "code": "230623",
            "name": "林甸县",
            "level": "district",
            "parentCode": "230600",
            "longitude": 124.877742,
            "children": []
          },
          {
            "code": "230624",
            "name": "杜尔伯特蒙古族自治县",
            "level": "district",
            "parentCode": "230600",
            "longitude": 124.446259,
            "children": []
          }
        ]
      },
      {
        "code": "230700",
        "name": "伊春市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 128.899396,
        "children": [
          {
            "code": "230717",
            "name": "伊美区",
            "level": "district",
            "parentCode": "230700",
            "longitude": 128.907303,
            "children": []
          },
          {
            "code": "230718",
            "name": "乌翠区",
            "level": "district",
            "parentCode": "230700",
            "longitude": 128.669859,
            "children": []
          },
          {
            "code": "230719",
            "name": "友好区",
            "level": "district",
            "parentCode": "230700",
            "longitude": 128.84075,
            "children": []
          },
          {
            "code": "230722",
            "name": "嘉荫县",
            "level": "district",
            "parentCode": "230700",
            "longitude": 130.397684,
            "children": []
          },
          {
            "code": "230723",
            "name": "汤旺县",
            "level": "district",
            "parentCode": "230700",
            "longitude": 129.571108,
            "children": []
          },
          {
            "code": "230724",
            "name": "丰林县",
            "level": "district",
            "parentCode": "230700",
            "longitude": 129.5336,
            "children": []
          },
          {
            "code": "230725",
            "name": "大箐山县",
            "level": "district",
            "parentCode": "230700",
            "longitude": 129.020793,
            "children": []
          },
          {
            "code": "230726",
            "name": "南岔县",
            "level": "district",
            "parentCode": "230700",
            "longitude": 129.28246,
            "children": []
          },
          {
            "code": "230751",
            "name": "金林区",
            "level": "district",
            "parentCode": "230700",
            "longitude": 129.429117,
            "children": []
          },
          {
            "code": "230781",
            "name": "铁力市",
            "level": "district",
            "parentCode": "230700",
            "longitude": 128.030561,
            "children": []
          }
        ]
      },
      {
        "code": "230800",
        "name": "佳木斯市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 130.361634,
        "children": [
          {
            "code": "230803",
            "name": "向阳区",
            "level": "district",
            "parentCode": "230800",
            "longitude": 130.361786,
            "children": []
          },
          {
            "code": "230804",
            "name": "前进区",
            "level": "district",
            "parentCode": "230800",
            "longitude": 130.377684,
            "children": []
          },
          {
            "code": "230805",
            "name": "东风区",
            "level": "district",
            "parentCode": "230800",
            "longitude": 130.403297,
            "children": []
          },
          {
            "code": "230811",
            "name": "郊区",
            "level": "district",
            "parentCode": "230800",
            "longitude": 130.351588,
            "children": []
          },
          {
            "code": "230822",
            "name": "桦南县",
            "level": "district",
            "parentCode": "230800",
            "longitude": 130.570112,
            "children": []
          },
          {
            "code": "230826",
            "name": "桦川县",
            "level": "district",
            "parentCode": "230800",
            "longitude": 130.723713,
            "children": []
          },
          {
            "code": "230828",
            "name": "汤原县",
            "level": "district",
            "parentCode": "230800",
            "longitude": 129.904463,
            "children": []
          },
          {
            "code": "230881",
            "name": "同江市",
            "level": "district",
            "parentCode": "230800",
            "longitude": 132.510119,
            "children": []
          },
          {
            "code": "230882",
            "name": "富锦市",
            "level": "district",
            "parentCode": "230800",
            "longitude": 132.037951,
            "children": []
          },
          {
            "code": "230883",
            "name": "抚远市",
            "level": "district",
            "parentCode": "230800",
            "longitude": 134.294501,
            "children": []
          }
        ]
      },
      {
        "code": "230900",
        "name": "七台河市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 131.015584,
        "children": [
          {
            "code": "230902",
            "name": "新兴区",
            "level": "district",
            "parentCode": "230900",
            "longitude": 130.889482,
            "children": []
          },
          {
            "code": "230903",
            "name": "桃山区",
            "level": "district",
            "parentCode": "230900",
            "longitude": 131.015848,
            "children": []
          },
          {
            "code": "230904",
            "name": "茄子河区",
            "level": "district",
            "parentCode": "230900",
            "longitude": 131.071561,
            "children": []
          },
          {
            "code": "230921",
            "name": "勃利县",
            "level": "district",
            "parentCode": "230900",
            "longitude": 130.575025,
            "children": []
          }
        ]
      },
      {
        "code": "231000",
        "name": "牡丹江市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 129.618602,
        "children": [
          {
            "code": "231002",
            "name": "东安区",
            "level": "district",
            "parentCode": "231000",
            "longitude": 129.623292,
            "children": []
          },
          {
            "code": "231003",
            "name": "阳明区",
            "level": "district",
            "parentCode": "231000",
            "longitude": 129.634645,
            "children": []
          },
          {
            "code": "231004",
            "name": "爱民区",
            "level": "district",
            "parentCode": "231000",
            "longitude": 129.601232,
            "children": []
          },
          {
            "code": "231005",
            "name": "西安区",
            "level": "district",
            "parentCode": "231000",
            "longitude": 129.61311,
            "children": []
          },
          {
            "code": "231025",
            "name": "林口县",
            "level": "district",
            "parentCode": "231000",
            "longitude": 130.268402,
            "children": []
          },
          {
            "code": "231081",
            "name": "绥芬河市",
            "level": "district",
            "parentCode": "231000",
            "longitude": 131.164856,
            "children": []
          },
          {
            "code": "231083",
            "name": "海林市",
            "level": "district",
            "parentCode": "231000",
            "longitude": 129.387902,
            "children": []
          },
          {
            "code": "231084",
            "name": "宁安市",
            "level": "district",
            "parentCode": "231000",
            "longitude": 129.470019,
            "children": []
          },
          {
            "code": "231085",
            "name": "穆棱市",
            "level": "district",
            "parentCode": "231000",
            "longitude": 130.527085,
            "children": []
          },
          {
            "code": "231086",
            "name": "东宁市",
            "level": "district",
            "parentCode": "231000",
            "longitude": 131.125296,
            "children": []
          }
        ]
      },
      {
        "code": "231100",
        "name": "黑河市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 127.499023,
        "children": [
          {
            "code": "231102",
            "name": "爱辉区",
            "level": "district",
            "parentCode": "231100",
            "longitude": 127.497639,
            "children": []
          },
          {
            "code": "231123",
            "name": "逊克县",
            "level": "district",
            "parentCode": "231100",
            "longitude": 128.476152,
            "children": []
          },
          {
            "code": "231124",
            "name": "孙吴县",
            "level": "district",
            "parentCode": "231100",
            "longitude": 127.327315,
            "children": []
          },
          {
            "code": "231181",
            "name": "北安市",
            "level": "district",
            "parentCode": "231100",
            "longitude": 126.508737,
            "children": []
          },
          {
            "code": "231182",
            "name": "五大连池市",
            "level": "district",
            "parentCode": "231100",
            "longitude": 126.197694,
            "children": []
          },
          {
            "code": "231183",
            "name": "嫩江市",
            "level": "district",
            "parentCode": "231100",
            "longitude": 125.229904,
            "children": []
          }
        ]
      },
      {
        "code": "231200",
        "name": "绥化市",
        "level": "city",
        "parentCode": "230000",
        "longitude": 126.99293,
        "children": [
          {
            "code": "231202",
            "name": "北林区",
            "level": "district",
            "parentCode": "231200",
            "longitude": 126.990665,
            "children": []
          },
          {
            "code": "231221",
            "name": "望奎县",
            "level": "district",
            "parentCode": "231200",
            "longitude": 126.484191,
            "children": []
          },
          {
            "code": "231222",
            "name": "兰西县",
            "level": "district",
            "parentCode": "231200",
            "longitude": 126.289315,
            "children": []
          },
          {
            "code": "231223",
            "name": "青冈县",
            "level": "district",
            "parentCode": "231200",
            "longitude": 126.112268,
            "children": []
          },
          {
            "code": "231224",
            "name": "庆安县",
            "level": "district",
            "parentCode": "231200",
            "longitude": 127.510024,
            "children": []
          },
          {
            "code": "231225",
            "name": "明水县",
            "level": "district",
            "parentCode": "231200",
            "longitude": 125.907544,
            "children": []
          },
          {
            "code": "231226",
            "name": "绥棱县",
            "level": "district",
            "parentCode": "231200",
            "longitude": 127.111121,
            "children": []
          },
          {
            "code": "231281",
            "name": "安达市",
            "level": "district",
            "parentCode": "231200",
            "longitude": 125.329926,
            "children": []
          },
          {
            "code": "231282",
            "name": "肇东市",
            "level": "district",
            "parentCode": "231200",
            "longitude": 125.991402,
            "children": []
          },
          {
            "code": "231283",
            "name": "海伦市",
            "level": "district",
            "parentCode": "231200",
            "longitude": 126.969383,
            "children": []
          }
        ]
      },
      {
        "code": "232700",
        "name": "大兴安岭地区",
        "level": "city",
        "parentCode": "230000",
        "longitude": 124.711526,
        "children": [
          {
            "code": "232701",
            "name": "漠河市",
            "level": "district",
            "parentCode": "232700",
            "longitude": 122.536256,
            "children": []
          },
          {
            "code": "232718",
            "name": "加格达奇区",
            "level": "district",
            "parentCode": "232700",
            "longitude": 124.126716,
            "children": []
          },
          {
            "code": "232721",
            "name": "呼玛县",
            "level": "district",
            "parentCode": "232700",
            "longitude": 126.662105,
            "children": []
          },
          {
            "code": "232722",
            "name": "塔河县",
            "level": "district",
            "parentCode": "232700",
            "longitude": 124.710516,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "310000",
    "name": "上海市",
    "level": "province",
    "longitude": 121.472644,
    "children": [
      {
        "code": "310000-direct",
        "name": "上海市",
        "level": "city",
        "parentCode": "310000",
        "longitude": 121.472644,
        "children": [
          {
            "code": "310101",
            "name": "黄浦区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.490317,
            "children": []
          },
          {
            "code": "310104",
            "name": "徐汇区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.43752,
            "children": []
          },
          {
            "code": "310105",
            "name": "长宁区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.4222,
            "children": []
          },
          {
            "code": "310106",
            "name": "静安区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.448224,
            "children": []
          },
          {
            "code": "310107",
            "name": "普陀区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.392499,
            "children": []
          },
          {
            "code": "310109",
            "name": "虹口区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.491832,
            "children": []
          },
          {
            "code": "310110",
            "name": "杨浦区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.522797,
            "children": []
          },
          {
            "code": "310112",
            "name": "闵行区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.375972,
            "children": []
          },
          {
            "code": "310113",
            "name": "宝山区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.489934,
            "children": []
          },
          {
            "code": "310114",
            "name": "嘉定区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.250333,
            "children": []
          },
          {
            "code": "310115",
            "name": "浦东新区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.567706,
            "children": []
          },
          {
            "code": "310116",
            "name": "金山区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.330736,
            "children": []
          },
          {
            "code": "310117",
            "name": "松江区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.223543,
            "children": []
          },
          {
            "code": "310118",
            "name": "青浦区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.113021,
            "children": []
          },
          {
            "code": "310120",
            "name": "奉贤区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.458472,
            "children": []
          },
          {
            "code": "310151",
            "name": "崇明区",
            "level": "district",
            "parentCode": "310000-direct",
            "longitude": 121.397516,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "320000",
    "name": "江苏省",
    "level": "province",
    "longitude": 118.767413,
    "children": [
      {
        "code": "320100",
        "name": "南京市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 118.767413,
        "children": [
          {
            "code": "320102",
            "name": "玄武区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.792199,
            "children": []
          },
          {
            "code": "320104",
            "name": "秦淮区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.786088,
            "children": []
          },
          {
            "code": "320105",
            "name": "建邺区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.732688,
            "children": []
          },
          {
            "code": "320106",
            "name": "鼓楼区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.769739,
            "children": []
          },
          {
            "code": "320111",
            "name": "浦口区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.625307,
            "children": []
          },
          {
            "code": "320113",
            "name": "栖霞区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.808702,
            "children": []
          },
          {
            "code": "320114",
            "name": "雨花台区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.77207,
            "children": []
          },
          {
            "code": "320115",
            "name": "江宁区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.850621,
            "children": []
          },
          {
            "code": "320116",
            "name": "六合区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.85065,
            "children": []
          },
          {
            "code": "320117",
            "name": "溧水区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 119.028732,
            "children": []
          },
          {
            "code": "320118",
            "name": "高淳区",
            "level": "district",
            "parentCode": "320100",
            "longitude": 118.87589,
            "children": []
          }
        ]
      },
      {
        "code": "320200",
        "name": "无锡市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 120.301663,
        "children": [
          {
            "code": "320205",
            "name": "锡山区",
            "level": "district",
            "parentCode": "320200",
            "longitude": 120.357298,
            "children": []
          },
          {
            "code": "320206",
            "name": "惠山区",
            "level": "district",
            "parentCode": "320200",
            "longitude": 120.303543,
            "children": []
          },
          {
            "code": "320211",
            "name": "滨湖区",
            "level": "district",
            "parentCode": "320200",
            "longitude": 120.266053,
            "children": []
          },
          {
            "code": "320213",
            "name": "梁溪区",
            "level": "district",
            "parentCode": "320200",
            "longitude": 120.296595,
            "children": []
          },
          {
            "code": "320214",
            "name": "新吴区",
            "level": "district",
            "parentCode": "320200",
            "longitude": 120.352782,
            "children": []
          },
          {
            "code": "320281",
            "name": "江阴市",
            "level": "district",
            "parentCode": "320200",
            "longitude": 120.275891,
            "children": []
          },
          {
            "code": "320282",
            "name": "宜兴市",
            "level": "district",
            "parentCode": "320200",
            "longitude": 119.820538,
            "children": []
          }
        ]
      },
      {
        "code": "320300",
        "name": "徐州市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 117.184811,
        "children": [
          {
            "code": "320302",
            "name": "鼓楼区",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.192941,
            "children": []
          },
          {
            "code": "320303",
            "name": "云龙区",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.194589,
            "children": []
          },
          {
            "code": "320305",
            "name": "贾汪区",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.450212,
            "children": []
          },
          {
            "code": "320311",
            "name": "泉山区",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.182225,
            "children": []
          },
          {
            "code": "320312",
            "name": "铜山区",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.183894,
            "children": []
          },
          {
            "code": "320321",
            "name": "丰县",
            "level": "district",
            "parentCode": "320300",
            "longitude": 116.592888,
            "children": []
          },
          {
            "code": "320322",
            "name": "沛县",
            "level": "district",
            "parentCode": "320300",
            "longitude": 116.937182,
            "children": []
          },
          {
            "code": "320324",
            "name": "睢宁县",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.95066,
            "children": []
          },
          {
            "code": "320381",
            "name": "新沂市",
            "level": "district",
            "parentCode": "320300",
            "longitude": 118.345828,
            "children": []
          },
          {
            "code": "320382",
            "name": "邳州市",
            "level": "district",
            "parentCode": "320300",
            "longitude": 117.963923,
            "children": []
          }
        ]
      },
      {
        "code": "320400",
        "name": "常州市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 119.946973,
        "children": [
          {
            "code": "320402",
            "name": "天宁区",
            "level": "district",
            "parentCode": "320400",
            "longitude": 119.963783,
            "children": []
          },
          {
            "code": "320404",
            "name": "钟楼区",
            "level": "district",
            "parentCode": "320400",
            "longitude": 119.948388,
            "children": []
          },
          {
            "code": "320411",
            "name": "新北区",
            "level": "district",
            "parentCode": "320400",
            "longitude": 119.974654,
            "children": []
          },
          {
            "code": "320412",
            "name": "武进区",
            "level": "district",
            "parentCode": "320400",
            "longitude": 119.958773,
            "children": []
          },
          {
            "code": "320413",
            "name": "金坛区",
            "level": "district",
            "parentCode": "320400",
            "longitude": 119.573395,
            "children": []
          },
          {
            "code": "320481",
            "name": "溧阳市",
            "level": "district",
            "parentCode": "320400",
            "longitude": 119.487816,
            "children": []
          }
        ]
      },
      {
        "code": "320500",
        "name": "苏州市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 120.619585,
        "children": [
          {
            "code": "320505",
            "name": "虎丘区",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.566833,
            "children": []
          },
          {
            "code": "320506",
            "name": "吴中区",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.624621,
            "children": []
          },
          {
            "code": "320507",
            "name": "相城区",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.618956,
            "children": []
          },
          {
            "code": "320508",
            "name": "姑苏区",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.622249,
            "children": []
          },
          {
            "code": "320509",
            "name": "吴江区",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.641601,
            "children": []
          },
          {
            "code": "320581",
            "name": "常熟市",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.74852,
            "children": []
          },
          {
            "code": "320582",
            "name": "张家港市",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.543441,
            "children": []
          },
          {
            "code": "320583",
            "name": "昆山市",
            "level": "district",
            "parentCode": "320500",
            "longitude": 120.958137,
            "children": []
          },
          {
            "code": "320585",
            "name": "太仓市",
            "level": "district",
            "parentCode": "320500",
            "longitude": 121.112275,
            "children": []
          }
        ]
      },
      {
        "code": "320600",
        "name": "南通市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 120.864608,
        "children": [
          {
            "code": "320602",
            "name": "崇川区",
            "level": "district",
            "parentCode": "320600",
            "longitude": 120.86635,
            "children": []
          },
          {
            "code": "320612",
            "name": "通州区",
            "level": "district",
            "parentCode": "320600",
            "longitude": 121.073171,
            "children": []
          },
          {
            "code": "320623",
            "name": "如东县",
            "level": "district",
            "parentCode": "320600",
            "longitude": 121.186088,
            "children": []
          },
          {
            "code": "320681",
            "name": "启东市",
            "level": "district",
            "parentCode": "320600",
            "longitude": 121.659724,
            "children": []
          },
          {
            "code": "320682",
            "name": "如皋市",
            "level": "district",
            "parentCode": "320600",
            "longitude": 120.566324,
            "children": []
          },
          {
            "code": "320684",
            "name": "海门区",
            "level": "district",
            "parentCode": "320600",
            "longitude": 121.176609,
            "children": []
          },
          {
            "code": "320685",
            "name": "海安市",
            "level": "district",
            "parentCode": "320600",
            "longitude": 120.465995,
            "children": []
          }
        ]
      },
      {
        "code": "320700",
        "name": "连云港市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 119.178821,
        "children": [
          {
            "code": "320703",
            "name": "连云区",
            "level": "district",
            "parentCode": "320700",
            "longitude": 119.366487,
            "children": []
          },
          {
            "code": "320706",
            "name": "海州区",
            "level": "district",
            "parentCode": "320700",
            "longitude": 119.179793,
            "children": []
          },
          {
            "code": "320707",
            "name": "赣榆区",
            "level": "district",
            "parentCode": "320700",
            "longitude": 119.128774,
            "children": []
          },
          {
            "code": "320722",
            "name": "东海县",
            "level": "district",
            "parentCode": "320700",
            "longitude": 118.766489,
            "children": []
          },
          {
            "code": "320723",
            "name": "灌云县",
            "level": "district",
            "parentCode": "320700",
            "longitude": 119.255741,
            "children": []
          },
          {
            "code": "320724",
            "name": "灌南县",
            "level": "district",
            "parentCode": "320700",
            "longitude": 119.352331,
            "children": []
          }
        ]
      },
      {
        "code": "320800",
        "name": "淮安市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 119.021265,
        "children": [
          {
            "code": "320803",
            "name": "淮安区",
            "level": "district",
            "parentCode": "320800",
            "longitude": 119.14634,
            "children": []
          },
          {
            "code": "320804",
            "name": "淮阴区",
            "level": "district",
            "parentCode": "320800",
            "longitude": 119.020817,
            "children": []
          },
          {
            "code": "320812",
            "name": "清江浦区",
            "level": "district",
            "parentCode": "320800",
            "longitude": 119.019454,
            "children": []
          },
          {
            "code": "320813",
            "name": "洪泽区",
            "level": "district",
            "parentCode": "320800",
            "longitude": 118.867875,
            "children": []
          },
          {
            "code": "320826",
            "name": "涟水县",
            "level": "district",
            "parentCode": "320800",
            "longitude": 119.266078,
            "children": []
          },
          {
            "code": "320830",
            "name": "盱眙县",
            "level": "district",
            "parentCode": "320800",
            "longitude": 118.493823,
            "children": []
          },
          {
            "code": "320831",
            "name": "金湖县",
            "level": "district",
            "parentCode": "320800",
            "longitude": 119.016936,
            "children": []
          }
        ]
      },
      {
        "code": "320900",
        "name": "盐城市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 120.139998,
        "children": [
          {
            "code": "320902",
            "name": "亭湖区",
            "level": "district",
            "parentCode": "320900",
            "longitude": 120.136078,
            "children": []
          },
          {
            "code": "320903",
            "name": "盐都区",
            "level": "district",
            "parentCode": "320900",
            "longitude": 120.139753,
            "children": []
          },
          {
            "code": "320904",
            "name": "大丰区",
            "level": "district",
            "parentCode": "320900",
            "longitude": 120.470324,
            "children": []
          },
          {
            "code": "320921",
            "name": "响水县",
            "level": "district",
            "parentCode": "320900",
            "longitude": 119.579573,
            "children": []
          },
          {
            "code": "320922",
            "name": "滨海县",
            "level": "district",
            "parentCode": "320900",
            "longitude": 119.828434,
            "children": []
          },
          {
            "code": "320923",
            "name": "阜宁县",
            "level": "district",
            "parentCode": "320900",
            "longitude": 119.805338,
            "children": []
          },
          {
            "code": "320924",
            "name": "射阳县",
            "level": "district",
            "parentCode": "320900",
            "longitude": 120.257444,
            "children": []
          },
          {
            "code": "320925",
            "name": "建湖县",
            "level": "district",
            "parentCode": "320900",
            "longitude": 119.793105,
            "children": []
          },
          {
            "code": "320981",
            "name": "东台市",
            "level": "district",
            "parentCode": "320900",
            "longitude": 120.314101,
            "children": []
          }
        ]
      },
      {
        "code": "321000",
        "name": "扬州市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 119.421003,
        "children": [
          {
            "code": "321002",
            "name": "广陵区",
            "level": "district",
            "parentCode": "321000",
            "longitude": 119.442267,
            "children": []
          },
          {
            "code": "321003",
            "name": "邗江区",
            "level": "district",
            "parentCode": "321000",
            "longitude": 119.397777,
            "children": []
          },
          {
            "code": "321012",
            "name": "江都区",
            "level": "district",
            "parentCode": "321000",
            "longitude": 119.567481,
            "children": []
          },
          {
            "code": "321023",
            "name": "宝应县",
            "level": "district",
            "parentCode": "321000",
            "longitude": 119.321284,
            "children": []
          },
          {
            "code": "321081",
            "name": "仪征市",
            "level": "district",
            "parentCode": "321000",
            "longitude": 119.182443,
            "children": []
          },
          {
            "code": "321084",
            "name": "高邮市",
            "level": "district",
            "parentCode": "321000",
            "longitude": 119.443842,
            "children": []
          }
        ]
      },
      {
        "code": "321100",
        "name": "镇江市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 119.452753,
        "children": [
          {
            "code": "321102",
            "name": "京口区",
            "level": "district",
            "parentCode": "321100",
            "longitude": 119.454571,
            "children": []
          },
          {
            "code": "321111",
            "name": "润州区",
            "level": "district",
            "parentCode": "321100",
            "longitude": 119.414877,
            "children": []
          },
          {
            "code": "321112",
            "name": "丹徒区",
            "level": "district",
            "parentCode": "321100",
            "longitude": 119.433883,
            "children": []
          },
          {
            "code": "321181",
            "name": "丹阳市",
            "level": "district",
            "parentCode": "321100",
            "longitude": 119.581911,
            "children": []
          },
          {
            "code": "321182",
            "name": "扬中市",
            "level": "district",
            "parentCode": "321100",
            "longitude": 119.828054,
            "children": []
          },
          {
            "code": "321183",
            "name": "句容市",
            "level": "district",
            "parentCode": "321100",
            "longitude": 119.167135,
            "children": []
          }
        ]
      },
      {
        "code": "321200",
        "name": "泰州市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 119.915176,
        "children": [
          {
            "code": "321202",
            "name": "海陵区",
            "level": "district",
            "parentCode": "321200",
            "longitude": 119.920187,
            "children": []
          },
          {
            "code": "321203",
            "name": "高港区",
            "level": "district",
            "parentCode": "321200",
            "longitude": 119.88166,
            "children": []
          },
          {
            "code": "321204",
            "name": "姜堰区",
            "level": "district",
            "parentCode": "321200",
            "longitude": 120.148208,
            "children": []
          },
          {
            "code": "321281",
            "name": "兴化市",
            "level": "district",
            "parentCode": "321200",
            "longitude": 119.840162,
            "children": []
          },
          {
            "code": "321282",
            "name": "靖江市",
            "level": "district",
            "parentCode": "321200",
            "longitude": 120.26825,
            "children": []
          },
          {
            "code": "321283",
            "name": "泰兴市",
            "level": "district",
            "parentCode": "321200",
            "longitude": 120.020228,
            "children": []
          }
        ]
      },
      {
        "code": "321300",
        "name": "宿迁市",
        "level": "city",
        "parentCode": "320000",
        "longitude": 118.275162,
        "children": [
          {
            "code": "321302",
            "name": "宿城区",
            "level": "district",
            "parentCode": "321300",
            "longitude": 118.278984,
            "children": []
          },
          {
            "code": "321311",
            "name": "宿豫区",
            "level": "district",
            "parentCode": "321300",
            "longitude": 118.330012,
            "children": []
          },
          {
            "code": "321322",
            "name": "沭阳县",
            "level": "district",
            "parentCode": "321300",
            "longitude": 118.775889,
            "children": []
          },
          {
            "code": "321323",
            "name": "泗阳县",
            "level": "district",
            "parentCode": "321300",
            "longitude": 118.681284,
            "children": []
          },
          {
            "code": "321324",
            "name": "泗洪县",
            "level": "district",
            "parentCode": "321300",
            "longitude": 118.211824,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "330000",
    "name": "浙江省",
    "level": "province",
    "longitude": 120.153576,
    "children": [
      {
        "code": "330100",
        "name": "杭州市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 120.153576,
        "children": [
          {
            "code": "330102",
            "name": "上城区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.171465,
            "children": []
          },
          {
            "code": "330105",
            "name": "拱墅区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.150053,
            "children": []
          },
          {
            "code": "330106",
            "name": "西湖区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.147376,
            "children": []
          },
          {
            "code": "330108",
            "name": "滨江区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.21062,
            "children": []
          },
          {
            "code": "330109",
            "name": "萧山区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.27069,
            "children": []
          },
          {
            "code": "330110",
            "name": "余杭区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 119.978959,
            "children": []
          },
          {
            "code": "330111",
            "name": "富阳区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 119.949869,
            "children": []
          },
          {
            "code": "330112",
            "name": "临安区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 119.715101,
            "children": []
          },
          {
            "code": "330114",
            "name": "钱塘区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.493972,
            "children": []
          },
          {
            "code": "330113",
            "name": "临平区",
            "level": "district",
            "parentCode": "330100",
            "longitude": 120.299376,
            "children": []
          },
          {
            "code": "330122",
            "name": "桐庐县",
            "level": "district",
            "parentCode": "330100",
            "longitude": 119.685045,
            "children": []
          },
          {
            "code": "330127",
            "name": "淳安县",
            "level": "district",
            "parentCode": "330100",
            "longitude": 119.044276,
            "children": []
          },
          {
            "code": "330182",
            "name": "建德市",
            "level": "district",
            "parentCode": "330100",
            "longitude": 119.279089,
            "children": []
          }
        ]
      },
      {
        "code": "330200",
        "name": "宁波市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 121.549792,
        "children": [
          {
            "code": "330203",
            "name": "海曙区",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.539698,
            "children": []
          },
          {
            "code": "330205",
            "name": "江北区",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.559282,
            "children": []
          },
          {
            "code": "330206",
            "name": "北仑区",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.831303,
            "children": []
          },
          {
            "code": "330211",
            "name": "镇海区",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.713162,
            "children": []
          },
          {
            "code": "330212",
            "name": "鄞州区",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.558436,
            "children": []
          },
          {
            "code": "330213",
            "name": "奉化区",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.41089,
            "children": []
          },
          {
            "code": "330225",
            "name": "象山县",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.877091,
            "children": []
          },
          {
            "code": "330226",
            "name": "宁海县",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.432606,
            "children": []
          },
          {
            "code": "330281",
            "name": "余姚市",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.156294,
            "children": []
          },
          {
            "code": "330282",
            "name": "慈溪市",
            "level": "district",
            "parentCode": "330200",
            "longitude": 121.248052,
            "children": []
          }
        ]
      },
      {
        "code": "330300",
        "name": "温州市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 120.672111,
        "children": [
          {
            "code": "330302",
            "name": "鹿城区",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.674231,
            "children": []
          },
          {
            "code": "330303",
            "name": "龙湾区",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.763469,
            "children": []
          },
          {
            "code": "330304",
            "name": "瓯海区",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.637145,
            "children": []
          },
          {
            "code": "330305",
            "name": "洞头区",
            "level": "district",
            "parentCode": "330300",
            "longitude": 121.156181,
            "children": []
          },
          {
            "code": "330324",
            "name": "永嘉县",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.690968,
            "children": []
          },
          {
            "code": "330326",
            "name": "平阳县",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.564387,
            "children": []
          },
          {
            "code": "330327",
            "name": "苍南县",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.406256,
            "children": []
          },
          {
            "code": "330328",
            "name": "文成县",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.09245,
            "children": []
          },
          {
            "code": "330329",
            "name": "泰顺县",
            "level": "district",
            "parentCode": "330300",
            "longitude": 119.71624,
            "children": []
          },
          {
            "code": "330381",
            "name": "瑞安市",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.646171,
            "children": []
          },
          {
            "code": "330382",
            "name": "乐清市",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.967147,
            "children": []
          },
          {
            "code": "330383",
            "name": "龙港市",
            "level": "district",
            "parentCode": "330300",
            "longitude": 120.553039,
            "children": []
          }
        ]
      },
      {
        "code": "330400",
        "name": "嘉兴市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 120.750865,
        "children": [
          {
            "code": "330402",
            "name": "南湖区",
            "level": "district",
            "parentCode": "330400",
            "longitude": 120.749953,
            "children": []
          },
          {
            "code": "330411",
            "name": "秀洲区",
            "level": "district",
            "parentCode": "330400",
            "longitude": 120.720431,
            "children": []
          },
          {
            "code": "330421",
            "name": "嘉善县",
            "level": "district",
            "parentCode": "330400",
            "longitude": 120.921871,
            "children": []
          },
          {
            "code": "330424",
            "name": "海盐县",
            "level": "district",
            "parentCode": "330400",
            "longitude": 120.942017,
            "children": []
          },
          {
            "code": "330481",
            "name": "海宁市",
            "level": "district",
            "parentCode": "330400",
            "longitude": 120.688821,
            "children": []
          },
          {
            "code": "330482",
            "name": "平湖市",
            "level": "district",
            "parentCode": "330400",
            "longitude": 121.014666,
            "children": []
          },
          {
            "code": "330483",
            "name": "桐乡市",
            "level": "district",
            "parentCode": "330400",
            "longitude": 120.551085,
            "children": []
          }
        ]
      },
      {
        "code": "330500",
        "name": "湖州市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 120.102398,
        "children": [
          {
            "code": "330502",
            "name": "吴兴区",
            "level": "district",
            "parentCode": "330500",
            "longitude": 120.101416,
            "children": []
          },
          {
            "code": "330503",
            "name": "南浔区",
            "level": "district",
            "parentCode": "330500",
            "longitude": 120.417195,
            "children": []
          },
          {
            "code": "330521",
            "name": "德清县",
            "level": "district",
            "parentCode": "330500",
            "longitude": 119.967662,
            "children": []
          },
          {
            "code": "330522",
            "name": "长兴县",
            "level": "district",
            "parentCode": "330500",
            "longitude": 119.910122,
            "children": []
          },
          {
            "code": "330523",
            "name": "安吉县",
            "level": "district",
            "parentCode": "330500",
            "longitude": 119.687891,
            "children": []
          }
        ]
      },
      {
        "code": "330600",
        "name": "绍兴市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 120.582112,
        "children": [
          {
            "code": "330602",
            "name": "越城区",
            "level": "district",
            "parentCode": "330600",
            "longitude": 120.585315,
            "children": []
          },
          {
            "code": "330603",
            "name": "柯桥区",
            "level": "district",
            "parentCode": "330600",
            "longitude": 120.476075,
            "children": []
          },
          {
            "code": "330604",
            "name": "上虞区",
            "level": "district",
            "parentCode": "330600",
            "longitude": 120.874185,
            "children": []
          },
          {
            "code": "330624",
            "name": "新昌县",
            "level": "district",
            "parentCode": "330600",
            "longitude": 120.905665,
            "children": []
          },
          {
            "code": "330681",
            "name": "诸暨市",
            "level": "district",
            "parentCode": "330600",
            "longitude": 120.244326,
            "children": []
          },
          {
            "code": "330683",
            "name": "嵊州市",
            "level": "district",
            "parentCode": "330600",
            "longitude": 120.82888,
            "children": []
          }
        ]
      },
      {
        "code": "330700",
        "name": "金华市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 119.649506,
        "children": [
          {
            "code": "330702",
            "name": "婺城区",
            "level": "district",
            "parentCode": "330700",
            "longitude": 119.652579,
            "children": []
          },
          {
            "code": "330703",
            "name": "金东区",
            "level": "district",
            "parentCode": "330700",
            "longitude": 119.681264,
            "children": []
          },
          {
            "code": "330723",
            "name": "武义县",
            "level": "district",
            "parentCode": "330700",
            "longitude": 119.819159,
            "children": []
          },
          {
            "code": "330726",
            "name": "浦江县",
            "level": "district",
            "parentCode": "330700",
            "longitude": 119.893363,
            "children": []
          },
          {
            "code": "330727",
            "name": "磐安县",
            "level": "district",
            "parentCode": "330700",
            "longitude": 120.44513,
            "children": []
          },
          {
            "code": "330781",
            "name": "兰溪市",
            "level": "district",
            "parentCode": "330700",
            "longitude": 119.460521,
            "children": []
          },
          {
            "code": "330782",
            "name": "义乌市",
            "level": "district",
            "parentCode": "330700",
            "longitude": 120.074911,
            "children": []
          },
          {
            "code": "330783",
            "name": "东阳市",
            "level": "district",
            "parentCode": "330700",
            "longitude": 120.23334,
            "children": []
          },
          {
            "code": "330784",
            "name": "永康市",
            "level": "district",
            "parentCode": "330700",
            "longitude": 120.036328,
            "children": []
          }
        ]
      },
      {
        "code": "330800",
        "name": "衢州市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 118.87263,
        "children": [
          {
            "code": "330802",
            "name": "柯城区",
            "level": "district",
            "parentCode": "330800",
            "longitude": 118.873041,
            "children": []
          },
          {
            "code": "330803",
            "name": "衢江区",
            "level": "district",
            "parentCode": "330800",
            "longitude": 118.957683,
            "children": []
          },
          {
            "code": "330822",
            "name": "常山县",
            "level": "district",
            "parentCode": "330800",
            "longitude": 118.521654,
            "children": []
          },
          {
            "code": "330824",
            "name": "开化县",
            "level": "district",
            "parentCode": "330800",
            "longitude": 118.414435,
            "children": []
          },
          {
            "code": "330825",
            "name": "龙游县",
            "level": "district",
            "parentCode": "330800",
            "longitude": 119.172525,
            "children": []
          },
          {
            "code": "330881",
            "name": "江山市",
            "level": "district",
            "parentCode": "330800",
            "longitude": 118.627879,
            "children": []
          }
        ]
      },
      {
        "code": "330900",
        "name": "舟山市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 122.106863,
        "children": [
          {
            "code": "330902",
            "name": "定海区",
            "level": "district",
            "parentCode": "330900",
            "longitude": 122.108496,
            "children": []
          },
          {
            "code": "330903",
            "name": "普陀区",
            "level": "district",
            "parentCode": "330900",
            "longitude": 122.301953,
            "children": []
          },
          {
            "code": "330921",
            "name": "岱山县",
            "level": "district",
            "parentCode": "330900",
            "longitude": 122.201132,
            "children": []
          },
          {
            "code": "330922",
            "name": "嵊泗县",
            "level": "district",
            "parentCode": "330900",
            "longitude": 122.457809,
            "children": []
          }
        ]
      },
      {
        "code": "331000",
        "name": "台州市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 121.428599,
        "children": [
          {
            "code": "331002",
            "name": "椒江区",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.431049,
            "children": []
          },
          {
            "code": "331003",
            "name": "黄岩区",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.262138,
            "children": []
          },
          {
            "code": "331004",
            "name": "路桥区",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.37292,
            "children": []
          },
          {
            "code": "331022",
            "name": "三门县",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.376429,
            "children": []
          },
          {
            "code": "331023",
            "name": "天台县",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.031227,
            "children": []
          },
          {
            "code": "331024",
            "name": "仙居县",
            "level": "district",
            "parentCode": "331000",
            "longitude": 120.735074,
            "children": []
          },
          {
            "code": "331081",
            "name": "温岭市",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.373611,
            "children": []
          },
          {
            "code": "331082",
            "name": "临海市",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.131229,
            "children": []
          },
          {
            "code": "331083",
            "name": "玉环市",
            "level": "district",
            "parentCode": "331000",
            "longitude": 121.232337,
            "children": []
          }
        ]
      },
      {
        "code": "331100",
        "name": "丽水市",
        "level": "city",
        "parentCode": "330000",
        "longitude": 119.921786,
        "children": [
          {
            "code": "331102",
            "name": "莲都区",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.922293,
            "children": []
          },
          {
            "code": "331121",
            "name": "青田县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 120.291939,
            "children": []
          },
          {
            "code": "331122",
            "name": "缙云县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 120.078965,
            "children": []
          },
          {
            "code": "331123",
            "name": "遂昌县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.27589,
            "children": []
          },
          {
            "code": "331124",
            "name": "松阳县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.485292,
            "children": []
          },
          {
            "code": "331125",
            "name": "云和县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.569458,
            "children": []
          },
          {
            "code": "331126",
            "name": "庆元县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.067233,
            "children": []
          },
          {
            "code": "331127",
            "name": "景宁畲族自治县",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.634669,
            "children": []
          },
          {
            "code": "331181",
            "name": "龙泉市",
            "level": "district",
            "parentCode": "331100",
            "longitude": 119.132319,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "340000",
    "name": "安徽省",
    "level": "province",
    "longitude": 117.283042,
    "children": [
      {
        "code": "340100",
        "name": "合肥市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 117.283042,
        "children": [
          {
            "code": "340102",
            "name": "瑶海区",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.315358,
            "children": []
          },
          {
            "code": "340103",
            "name": "庐阳区",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.283776,
            "children": []
          },
          {
            "code": "340104",
            "name": "蜀山区",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.262072,
            "children": []
          },
          {
            "code": "340111",
            "name": "包河区",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.285751,
            "children": []
          },
          {
            "code": "340121",
            "name": "长丰县",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.164699,
            "children": []
          },
          {
            "code": "340122",
            "name": "肥东县",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.463222,
            "children": []
          },
          {
            "code": "340123",
            "name": "肥西县",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.166118,
            "children": []
          },
          {
            "code": "340124",
            "name": "庐江县",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.289844,
            "children": []
          },
          {
            "code": "340181",
            "name": "巢湖市",
            "level": "district",
            "parentCode": "340100",
            "longitude": 117.874155,
            "children": []
          }
        ]
      },
      {
        "code": "340200",
        "name": "芜湖市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 118.376451,
        "children": [
          {
            "code": "340202",
            "name": "镜湖区",
            "level": "district",
            "parentCode": "340200",
            "longitude": 118.376343,
            "children": []
          },
          {
            "code": "340207",
            "name": "鸠江区",
            "level": "district",
            "parentCode": "340200",
            "longitude": 118.400174,
            "children": []
          },
          {
            "code": "340209",
            "name": "弋江区",
            "level": "district",
            "parentCode": "340200",
            "longitude": 118.377476,
            "children": []
          },
          {
            "code": "340210",
            "name": "湾沚区",
            "level": "district",
            "parentCode": "340200",
            "longitude": 118.572301,
            "children": []
          },
          {
            "code": "340211",
            "name": "繁昌区",
            "level": "district",
            "parentCode": "340200",
            "longitude": 118.201349,
            "children": []
          },
          {
            "code": "340223",
            "name": "南陵县",
            "level": "district",
            "parentCode": "340200",
            "longitude": 118.337104,
            "children": []
          },
          {
            "code": "340281",
            "name": "无为市",
            "level": "district",
            "parentCode": "340200",
            "longitude": 117.911432,
            "children": []
          }
        ]
      },
      {
        "code": "340300",
        "name": "蚌埠市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 117.363228,
        "children": [
          {
            "code": "340302",
            "name": "龙子湖区",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.382312,
            "children": []
          },
          {
            "code": "340303",
            "name": "蚌山区",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.355789,
            "children": []
          },
          {
            "code": "340304",
            "name": "禹会区",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.35259,
            "children": []
          },
          {
            "code": "340311",
            "name": "淮上区",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.34709,
            "children": []
          },
          {
            "code": "340321",
            "name": "怀远县",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.200171,
            "children": []
          },
          {
            "code": "340322",
            "name": "五河县",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.888809,
            "children": []
          },
          {
            "code": "340323",
            "name": "固镇县",
            "level": "district",
            "parentCode": "340300",
            "longitude": 117.315962,
            "children": []
          }
        ]
      },
      {
        "code": "340400",
        "name": "淮南市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 117.018329,
        "children": [
          {
            "code": "340402",
            "name": "大通区",
            "level": "district",
            "parentCode": "340400",
            "longitude": 117.052927,
            "children": []
          },
          {
            "code": "340403",
            "name": "田家庵区",
            "level": "district",
            "parentCode": "340400",
            "longitude": 117.018318,
            "children": []
          },
          {
            "code": "340404",
            "name": "谢家集区",
            "level": "district",
            "parentCode": "340400",
            "longitude": 116.865354,
            "children": []
          },
          {
            "code": "340405",
            "name": "八公山区",
            "level": "district",
            "parentCode": "340400",
            "longitude": 116.841111,
            "children": []
          },
          {
            "code": "340406",
            "name": "潘集区",
            "level": "district",
            "parentCode": "340400",
            "longitude": 116.816879,
            "children": []
          },
          {
            "code": "340421",
            "name": "凤台县",
            "level": "district",
            "parentCode": "340400",
            "longitude": 116.722769,
            "children": []
          },
          {
            "code": "340422",
            "name": "寿县",
            "level": "district",
            "parentCode": "340400",
            "longitude": 116.785349,
            "children": []
          }
        ]
      },
      {
        "code": "340500",
        "name": "马鞍山市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 118.507906,
        "children": [
          {
            "code": "340503",
            "name": "花山区",
            "level": "district",
            "parentCode": "340500",
            "longitude": 118.511308,
            "children": []
          },
          {
            "code": "340504",
            "name": "雨山区",
            "level": "district",
            "parentCode": "340500",
            "longitude": 118.493104,
            "children": []
          },
          {
            "code": "340506",
            "name": "博望区",
            "level": "district",
            "parentCode": "340500",
            "longitude": 118.843742,
            "children": []
          },
          {
            "code": "340521",
            "name": "当涂县",
            "level": "district",
            "parentCode": "340500",
            "longitude": 118.489873,
            "children": []
          },
          {
            "code": "340522",
            "name": "含山县",
            "level": "district",
            "parentCode": "340500",
            "longitude": 118.105545,
            "children": []
          },
          {
            "code": "340523",
            "name": "和县",
            "level": "district",
            "parentCode": "340500",
            "longitude": 118.362998,
            "children": []
          }
        ]
      },
      {
        "code": "340600",
        "name": "淮北市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 116.794664,
        "children": [
          {
            "code": "340602",
            "name": "杜集区",
            "level": "district",
            "parentCode": "340600",
            "longitude": 116.833925,
            "children": []
          },
          {
            "code": "340603",
            "name": "相山区",
            "level": "district",
            "parentCode": "340600",
            "longitude": 116.790775,
            "children": []
          },
          {
            "code": "340604",
            "name": "烈山区",
            "level": "district",
            "parentCode": "340600",
            "longitude": 116.809465,
            "children": []
          },
          {
            "code": "340621",
            "name": "濉溪县",
            "level": "district",
            "parentCode": "340600",
            "longitude": 116.767435,
            "children": []
          }
        ]
      },
      {
        "code": "340700",
        "name": "铜陵市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 117.816576,
        "children": [
          {
            "code": "340705",
            "name": "铜官区",
            "level": "district",
            "parentCode": "340700",
            "longitude": 117.816167,
            "children": []
          },
          {
            "code": "340706",
            "name": "义安区",
            "level": "district",
            "parentCode": "340700",
            "longitude": 117.792288,
            "children": []
          },
          {
            "code": "340711",
            "name": "郊区",
            "level": "district",
            "parentCode": "340700",
            "longitude": 117.80707,
            "children": []
          },
          {
            "code": "340722",
            "name": "枞阳县",
            "level": "district",
            "parentCode": "340700",
            "longitude": 117.222027,
            "children": []
          }
        ]
      },
      {
        "code": "340800",
        "name": "安庆市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 117.043551,
        "children": [
          {
            "code": "340802",
            "name": "迎江区",
            "level": "district",
            "parentCode": "340800",
            "longitude": 117.044965,
            "children": []
          },
          {
            "code": "340803",
            "name": "大观区",
            "level": "district",
            "parentCode": "340800",
            "longitude": 117.034512,
            "children": []
          },
          {
            "code": "340811",
            "name": "宜秀区",
            "level": "district",
            "parentCode": "340800",
            "longitude": 117.070003,
            "children": []
          },
          {
            "code": "340822",
            "name": "怀宁县",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.828664,
            "children": []
          },
          {
            "code": "340825",
            "name": "太湖县",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.305225,
            "children": []
          },
          {
            "code": "340826",
            "name": "宿松县",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.120204,
            "children": []
          },
          {
            "code": "340827",
            "name": "望江县",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.690927,
            "children": []
          },
          {
            "code": "340828",
            "name": "岳西县",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.360482,
            "children": []
          },
          {
            "code": "340881",
            "name": "桐城市",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.959656,
            "children": []
          },
          {
            "code": "340882",
            "name": "潜山市",
            "level": "district",
            "parentCode": "340800",
            "longitude": 116.573665,
            "children": []
          }
        ]
      },
      {
        "code": "341000",
        "name": "黄山市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 118.317325,
        "children": [
          {
            "code": "341002",
            "name": "屯溪区",
            "level": "district",
            "parentCode": "341000",
            "longitude": 118.317354,
            "children": []
          },
          {
            "code": "341003",
            "name": "黄山区",
            "level": "district",
            "parentCode": "341000",
            "longitude": 118.136639,
            "children": []
          },
          {
            "code": "341004",
            "name": "徽州区",
            "level": "district",
            "parentCode": "341000",
            "longitude": 118.339743,
            "children": []
          },
          {
            "code": "341021",
            "name": "歙县",
            "level": "district",
            "parentCode": "341000",
            "longitude": 118.428025,
            "children": []
          },
          {
            "code": "341022",
            "name": "休宁县",
            "level": "district",
            "parentCode": "341000",
            "longitude": 118.188531,
            "children": []
          },
          {
            "code": "341023",
            "name": "黟县",
            "level": "district",
            "parentCode": "341000",
            "longitude": 117.942911,
            "children": []
          },
          {
            "code": "341024",
            "name": "祁门县",
            "level": "district",
            "parentCode": "341000",
            "longitude": 117.717237,
            "children": []
          }
        ]
      },
      {
        "code": "341100",
        "name": "滁州市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 118.316264,
        "children": [
          {
            "code": "341102",
            "name": "琅琊区",
            "level": "district",
            "parentCode": "341100",
            "longitude": 118.316475,
            "children": []
          },
          {
            "code": "341103",
            "name": "南谯区",
            "level": "district",
            "parentCode": "341100",
            "longitude": 118.296955,
            "children": []
          },
          {
            "code": "341122",
            "name": "来安县",
            "level": "district",
            "parentCode": "341100",
            "longitude": 118.433293,
            "children": []
          },
          {
            "code": "341124",
            "name": "全椒县",
            "level": "district",
            "parentCode": "341100",
            "longitude": 118.268576,
            "children": []
          },
          {
            "code": "341125",
            "name": "定远县",
            "level": "district",
            "parentCode": "341100",
            "longitude": 117.683713,
            "children": []
          },
          {
            "code": "341126",
            "name": "凤阳县",
            "level": "district",
            "parentCode": "341100",
            "longitude": 117.562461,
            "children": []
          },
          {
            "code": "341181",
            "name": "天长市",
            "level": "district",
            "parentCode": "341100",
            "longitude": 119.011212,
            "children": []
          },
          {
            "code": "341182",
            "name": "明光市",
            "level": "district",
            "parentCode": "341100",
            "longitude": 117.998048,
            "children": []
          }
        ]
      },
      {
        "code": "341200",
        "name": "阜阳市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 115.819729,
        "children": [
          {
            "code": "341202",
            "name": "颍州区",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.813914,
            "children": []
          },
          {
            "code": "341203",
            "name": "颍东区",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.858747,
            "children": []
          },
          {
            "code": "341204",
            "name": "颍泉区",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.804525,
            "children": []
          },
          {
            "code": "341221",
            "name": "临泉县",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.261688,
            "children": []
          },
          {
            "code": "341222",
            "name": "太和县",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.627243,
            "children": []
          },
          {
            "code": "341225",
            "name": "阜南县",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.590534,
            "children": []
          },
          {
            "code": "341226",
            "name": "颍上县",
            "level": "district",
            "parentCode": "341200",
            "longitude": 116.259122,
            "children": []
          },
          {
            "code": "341282",
            "name": "界首市",
            "level": "district",
            "parentCode": "341200",
            "longitude": 115.362117,
            "children": []
          }
        ]
      },
      {
        "code": "341300",
        "name": "宿州市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 116.984084,
        "children": [
          {
            "code": "341302",
            "name": "埇桥区",
            "level": "district",
            "parentCode": "341300",
            "longitude": 116.983309,
            "children": []
          },
          {
            "code": "341321",
            "name": "砀山县",
            "level": "district",
            "parentCode": "341300",
            "longitude": 116.351113,
            "children": []
          },
          {
            "code": "341322",
            "name": "萧县",
            "level": "district",
            "parentCode": "341300",
            "longitude": 116.945399,
            "children": []
          },
          {
            "code": "341323",
            "name": "灵璧县",
            "level": "district",
            "parentCode": "341300",
            "longitude": 117.551493,
            "children": []
          },
          {
            "code": "341324",
            "name": "泗县",
            "level": "district",
            "parentCode": "341300",
            "longitude": 117.885443,
            "children": []
          }
        ]
      },
      {
        "code": "341500",
        "name": "六安市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 116.507676,
        "children": [
          {
            "code": "341502",
            "name": "金安区",
            "level": "district",
            "parentCode": "341500",
            "longitude": 116.503288,
            "children": []
          },
          {
            "code": "341503",
            "name": "裕安区",
            "level": "district",
            "parentCode": "341500",
            "longitude": 116.494543,
            "children": []
          },
          {
            "code": "341504",
            "name": "叶集区",
            "level": "district",
            "parentCode": "341500",
            "longitude": 115.913594,
            "children": []
          },
          {
            "code": "341522",
            "name": "霍邱县",
            "level": "district",
            "parentCode": "341500",
            "longitude": 116.278875,
            "children": []
          },
          {
            "code": "341523",
            "name": "舒城县",
            "level": "district",
            "parentCode": "341500",
            "longitude": 116.944088,
            "children": []
          },
          {
            "code": "341524",
            "name": "金寨县",
            "level": "district",
            "parentCode": "341500",
            "longitude": 115.878514,
            "children": []
          },
          {
            "code": "341525",
            "name": "霍山县",
            "level": "district",
            "parentCode": "341500",
            "longitude": 116.333078,
            "children": []
          }
        ]
      },
      {
        "code": "341600",
        "name": "亳州市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 115.782939,
        "children": [
          {
            "code": "341602",
            "name": "谯城区",
            "level": "district",
            "parentCode": "341600",
            "longitude": 115.781214,
            "children": []
          },
          {
            "code": "341621",
            "name": "涡阳县",
            "level": "district",
            "parentCode": "341600",
            "longitude": 116.211551,
            "children": []
          },
          {
            "code": "341622",
            "name": "蒙城县",
            "level": "district",
            "parentCode": "341600",
            "longitude": 116.560337,
            "children": []
          },
          {
            "code": "341623",
            "name": "利辛县",
            "level": "district",
            "parentCode": "341600",
            "longitude": 116.207782,
            "children": []
          }
        ]
      },
      {
        "code": "341700",
        "name": "池州市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 117.489157,
        "children": [
          {
            "code": "341702",
            "name": "贵池区",
            "level": "district",
            "parentCode": "341700",
            "longitude": 117.488342,
            "children": []
          },
          {
            "code": "341721",
            "name": "东至县",
            "level": "district",
            "parentCode": "341700",
            "longitude": 117.021476,
            "children": []
          },
          {
            "code": "341722",
            "name": "石台县",
            "level": "district",
            "parentCode": "341700",
            "longitude": 117.482907,
            "children": []
          },
          {
            "code": "341723",
            "name": "青阳县",
            "level": "district",
            "parentCode": "341700",
            "longitude": 117.857395,
            "children": []
          }
        ]
      },
      {
        "code": "341800",
        "name": "宣城市",
        "level": "city",
        "parentCode": "340000",
        "longitude": 118.757995,
        "children": [
          {
            "code": "341802",
            "name": "宣州区",
            "level": "district",
            "parentCode": "341800",
            "longitude": 118.758412,
            "children": []
          },
          {
            "code": "341821",
            "name": "郎溪县",
            "level": "district",
            "parentCode": "341800",
            "longitude": 119.185024,
            "children": []
          },
          {
            "code": "341823",
            "name": "泾县",
            "level": "district",
            "parentCode": "341800",
            "longitude": 118.412397,
            "children": []
          },
          {
            "code": "341824",
            "name": "绩溪县",
            "level": "district",
            "parentCode": "341800",
            "longitude": 118.594705,
            "children": []
          },
          {
            "code": "341825",
            "name": "旌德县",
            "level": "district",
            "parentCode": "341800",
            "longitude": 118.543081,
            "children": []
          },
          {
            "code": "341881",
            "name": "宁国市",
            "level": "district",
            "parentCode": "341800",
            "longitude": 118.983407,
            "children": []
          },
          {
            "code": "341882",
            "name": "广德市",
            "level": "district",
            "parentCode": "341800",
            "longitude": 119.417521,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "350000",
    "name": "福建省",
    "level": "province",
    "longitude": 119.306239,
    "children": [
      {
        "code": "350100",
        "name": "福州市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 119.306239,
        "children": [
          {
            "code": "350102",
            "name": "鼓楼区",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.29929,
            "children": []
          },
          {
            "code": "350103",
            "name": "台江区",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.310156,
            "children": []
          },
          {
            "code": "350104",
            "name": "仓山区",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.320988,
            "children": []
          },
          {
            "code": "350105",
            "name": "马尾区",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.458725,
            "children": []
          },
          {
            "code": "350111",
            "name": "晋安区",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.328597,
            "children": []
          },
          {
            "code": "350112",
            "name": "长乐区",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.510849,
            "children": []
          },
          {
            "code": "350121",
            "name": "闽侯县",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.145117,
            "children": []
          },
          {
            "code": "350122",
            "name": "连江县",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.538365,
            "children": []
          },
          {
            "code": "350123",
            "name": "罗源县",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.552645,
            "children": []
          },
          {
            "code": "350124",
            "name": "闽清县",
            "level": "district",
            "parentCode": "350100",
            "longitude": 118.868416,
            "children": []
          },
          {
            "code": "350125",
            "name": "永泰县",
            "level": "district",
            "parentCode": "350100",
            "longitude": 118.939089,
            "children": []
          },
          {
            "code": "350128",
            "name": "平潭县",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.791197,
            "children": []
          },
          {
            "code": "350181",
            "name": "福清市",
            "level": "district",
            "parentCode": "350100",
            "longitude": 119.376992,
            "children": []
          }
        ]
      },
      {
        "code": "350200",
        "name": "厦门市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 118.11022,
        "children": [
          {
            "code": "350203",
            "name": "思明区",
            "level": "district",
            "parentCode": "350200",
            "longitude": 118.087828,
            "children": []
          },
          {
            "code": "350205",
            "name": "海沧区",
            "level": "district",
            "parentCode": "350200",
            "longitude": 118.036364,
            "children": []
          },
          {
            "code": "350206",
            "name": "湖里区",
            "level": "district",
            "parentCode": "350200",
            "longitude": 118.10943,
            "children": []
          },
          {
            "code": "350211",
            "name": "集美区",
            "level": "district",
            "parentCode": "350200",
            "longitude": 118.100869,
            "children": []
          },
          {
            "code": "350212",
            "name": "同安区",
            "level": "district",
            "parentCode": "350200",
            "longitude": 118.150455,
            "children": []
          },
          {
            "code": "350213",
            "name": "翔安区",
            "level": "district",
            "parentCode": "350200",
            "longitude": 118.242811,
            "children": []
          }
        ]
      },
      {
        "code": "350300",
        "name": "莆田市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 119.007558,
        "children": [
          {
            "code": "350302",
            "name": "城厢区",
            "level": "district",
            "parentCode": "350300",
            "longitude": 119.001028,
            "children": []
          },
          {
            "code": "350303",
            "name": "涵江区",
            "level": "district",
            "parentCode": "350300",
            "longitude": 119.119102,
            "children": []
          },
          {
            "code": "350304",
            "name": "荔城区",
            "level": "district",
            "parentCode": "350300",
            "longitude": 119.020047,
            "children": []
          },
          {
            "code": "350305",
            "name": "秀屿区",
            "level": "district",
            "parentCode": "350300",
            "longitude": 119.092607,
            "children": []
          },
          {
            "code": "350322",
            "name": "仙游县",
            "level": "district",
            "parentCode": "350300",
            "longitude": 118.694331,
            "children": []
          }
        ]
      },
      {
        "code": "350400",
        "name": "三明市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 117.635001,
        "children": [
          {
            "code": "350403",
            "name": "三元区",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.607418,
            "children": []
          },
          {
            "code": "350421",
            "name": "明溪县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.201845,
            "children": []
          },
          {
            "code": "350423",
            "name": "清流县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 116.815821,
            "children": []
          },
          {
            "code": "350424",
            "name": "宁化县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 116.659725,
            "children": []
          },
          {
            "code": "350425",
            "name": "大田县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.849355,
            "children": []
          },
          {
            "code": "350426",
            "name": "尤溪县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 118.188577,
            "children": []
          },
          {
            "code": "350427",
            "name": "沙县区",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.789095,
            "children": []
          },
          {
            "code": "350428",
            "name": "将乐县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.473558,
            "children": []
          },
          {
            "code": "350429",
            "name": "泰宁县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.177522,
            "children": []
          },
          {
            "code": "350430",
            "name": "建宁县",
            "level": "district",
            "parentCode": "350400",
            "longitude": 116.845832,
            "children": []
          },
          {
            "code": "350481",
            "name": "永安市",
            "level": "district",
            "parentCode": "350400",
            "longitude": 117.364447,
            "children": []
          }
        ]
      },
      {
        "code": "350500",
        "name": "泉州市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 118.589421,
        "children": [
          {
            "code": "350502",
            "name": "鲤城区",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.588929,
            "children": []
          },
          {
            "code": "350503",
            "name": "丰泽区",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.605147,
            "children": []
          },
          {
            "code": "350504",
            "name": "洛江区",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.670312,
            "children": []
          },
          {
            "code": "350505",
            "name": "泉港区",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.912285,
            "children": []
          },
          {
            "code": "350521",
            "name": "惠安县",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.798954,
            "children": []
          },
          {
            "code": "350524",
            "name": "安溪县",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.186014,
            "children": []
          },
          {
            "code": "350525",
            "name": "永春县",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.29503,
            "children": []
          },
          {
            "code": "350526",
            "name": "德化县",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.242986,
            "children": []
          },
          {
            "code": "350527",
            "name": "金门县",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.323221,
            "children": []
          },
          {
            "code": "350581",
            "name": "石狮市",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.628402,
            "children": []
          },
          {
            "code": "350582",
            "name": "晋江市",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.577338,
            "children": []
          },
          {
            "code": "350583",
            "name": "南安市",
            "level": "district",
            "parentCode": "350500",
            "longitude": 118.387031,
            "children": []
          }
        ]
      },
      {
        "code": "350600",
        "name": "漳州市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 117.661801,
        "children": [
          {
            "code": "350602",
            "name": "芗城区",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.656461,
            "children": []
          },
          {
            "code": "350603",
            "name": "龙文区",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.671387,
            "children": []
          },
          {
            "code": "350622",
            "name": "云霄县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.340946,
            "children": []
          },
          {
            "code": "350623",
            "name": "漳浦县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.614023,
            "children": []
          },
          {
            "code": "350624",
            "name": "诏安县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.176083,
            "children": []
          },
          {
            "code": "350625",
            "name": "长泰区",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.755913,
            "children": []
          },
          {
            "code": "350626",
            "name": "东山县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.427679,
            "children": []
          },
          {
            "code": "350627",
            "name": "南靖县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.365462,
            "children": []
          },
          {
            "code": "350628",
            "name": "平和县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.313549,
            "children": []
          },
          {
            "code": "350629",
            "name": "华安县",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.53631,
            "children": []
          },
          {
            "code": "350681",
            "name": "龙海区",
            "level": "district",
            "parentCode": "350600",
            "longitude": 117.817292,
            "children": []
          }
        ]
      },
      {
        "code": "350700",
        "name": "南平市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 118.178459,
        "children": [
          {
            "code": "350702",
            "name": "延平区",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.178918,
            "children": []
          },
          {
            "code": "350703",
            "name": "建阳区",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.12267,
            "children": []
          },
          {
            "code": "350721",
            "name": "顺昌县",
            "level": "district",
            "parentCode": "350700",
            "longitude": 117.80771,
            "children": []
          },
          {
            "code": "350722",
            "name": "浦城县",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.536822,
            "children": []
          },
          {
            "code": "350723",
            "name": "光泽县",
            "level": "district",
            "parentCode": "350700",
            "longitude": 117.337897,
            "children": []
          },
          {
            "code": "350724",
            "name": "松溪县",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.783491,
            "children": []
          },
          {
            "code": "350725",
            "name": "政和县",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.858661,
            "children": []
          },
          {
            "code": "350781",
            "name": "邵武市",
            "level": "district",
            "parentCode": "350700",
            "longitude": 117.491544,
            "children": []
          },
          {
            "code": "350782",
            "name": "武夷山市",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.032796,
            "children": []
          },
          {
            "code": "350783",
            "name": "建瓯市",
            "level": "district",
            "parentCode": "350700",
            "longitude": 118.321765,
            "children": []
          }
        ]
      },
      {
        "code": "350800",
        "name": "龙岩市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 117.02978,
        "children": [
          {
            "code": "350802",
            "name": "新罗区",
            "level": "district",
            "parentCode": "350800",
            "longitude": 117.030721,
            "children": []
          },
          {
            "code": "350803",
            "name": "永定区",
            "level": "district",
            "parentCode": "350800",
            "longitude": 116.732691,
            "children": []
          },
          {
            "code": "350821",
            "name": "长汀县",
            "level": "district",
            "parentCode": "350800",
            "longitude": 116.361007,
            "children": []
          },
          {
            "code": "350823",
            "name": "上杭县",
            "level": "district",
            "parentCode": "350800",
            "longitude": 116.424774,
            "children": []
          },
          {
            "code": "350824",
            "name": "武平县",
            "level": "district",
            "parentCode": "350800",
            "longitude": 116.100928,
            "children": []
          },
          {
            "code": "350825",
            "name": "连城县",
            "level": "district",
            "parentCode": "350800",
            "longitude": 116.756687,
            "children": []
          },
          {
            "code": "350881",
            "name": "漳平市",
            "level": "district",
            "parentCode": "350800",
            "longitude": 117.42073,
            "children": []
          }
        ]
      },
      {
        "code": "350900",
        "name": "宁德市",
        "level": "city",
        "parentCode": "350000",
        "longitude": 119.527082,
        "children": [
          {
            "code": "350902",
            "name": "蕉城区",
            "level": "district",
            "parentCode": "350900",
            "longitude": 119.527225,
            "children": []
          },
          {
            "code": "350921",
            "name": "霞浦县",
            "level": "district",
            "parentCode": "350900",
            "longitude": 120.005214,
            "children": []
          },
          {
            "code": "350922",
            "name": "古田县",
            "level": "district",
            "parentCode": "350900",
            "longitude": 118.743156,
            "children": []
          },
          {
            "code": "350923",
            "name": "屏南县",
            "level": "district",
            "parentCode": "350900",
            "longitude": 118.987544,
            "children": []
          },
          {
            "code": "350924",
            "name": "寿宁县",
            "level": "district",
            "parentCode": "350900",
            "longitude": 119.506733,
            "children": []
          },
          {
            "code": "350925",
            "name": "周宁县",
            "level": "district",
            "parentCode": "350900",
            "longitude": 119.338239,
            "children": []
          },
          {
            "code": "350926",
            "name": "柘荣县",
            "level": "district",
            "parentCode": "350900",
            "longitude": 119.898226,
            "children": []
          },
          {
            "code": "350981",
            "name": "福安市",
            "level": "district",
            "parentCode": "350900",
            "longitude": 119.650798,
            "children": []
          },
          {
            "code": "350982",
            "name": "福鼎市",
            "level": "district",
            "parentCode": "350900",
            "longitude": 120.219761,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "360000",
    "name": "江西省",
    "level": "province",
    "longitude": 115.892151,
    "children": [
      {
        "code": "360100",
        "name": "南昌市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 115.892151,
        "children": [
          {
            "code": "360102",
            "name": "东湖区",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.889675,
            "children": []
          },
          {
            "code": "360103",
            "name": "西湖区",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.91065,
            "children": []
          },
          {
            "code": "360104",
            "name": "青云谱区",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.907292,
            "children": []
          },
          {
            "code": "360111",
            "name": "青山湖区",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.949044,
            "children": []
          },
          {
            "code": "360112",
            "name": "新建区",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.820806,
            "children": []
          },
          {
            "code": "360113",
            "name": "红谷滩区",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.858052,
            "children": []
          },
          {
            "code": "360121",
            "name": "南昌县",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.942465,
            "children": []
          },
          {
            "code": "360123",
            "name": "安义县",
            "level": "district",
            "parentCode": "360100",
            "longitude": 115.553109,
            "children": []
          },
          {
            "code": "360124",
            "name": "进贤县",
            "level": "district",
            "parentCode": "360100",
            "longitude": 116.267671,
            "children": []
          }
        ]
      },
      {
        "code": "360200",
        "name": "景德镇市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 117.214664,
        "children": [
          {
            "code": "360202",
            "name": "昌江区",
            "level": "district",
            "parentCode": "360200",
            "longitude": 117.195023,
            "children": []
          },
          {
            "code": "360203",
            "name": "珠山区",
            "level": "district",
            "parentCode": "360200",
            "longitude": 117.214814,
            "children": []
          },
          {
            "code": "360222",
            "name": "浮梁县",
            "level": "district",
            "parentCode": "360200",
            "longitude": 117.217611,
            "children": []
          },
          {
            "code": "360281",
            "name": "乐平市",
            "level": "district",
            "parentCode": "360200",
            "longitude": 117.129376,
            "children": []
          }
        ]
      },
      {
        "code": "360300",
        "name": "萍乡市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 113.852186,
        "children": [
          {
            "code": "360302",
            "name": "安源区",
            "level": "district",
            "parentCode": "360300",
            "longitude": 113.855044,
            "children": []
          },
          {
            "code": "360313",
            "name": "湘东区",
            "level": "district",
            "parentCode": "360300",
            "longitude": 113.7456,
            "children": []
          },
          {
            "code": "360321",
            "name": "莲花县",
            "level": "district",
            "parentCode": "360300",
            "longitude": 113.955582,
            "children": []
          },
          {
            "code": "360322",
            "name": "上栗县",
            "level": "district",
            "parentCode": "360300",
            "longitude": 113.800525,
            "children": []
          },
          {
            "code": "360323",
            "name": "芦溪县",
            "level": "district",
            "parentCode": "360300",
            "longitude": 114.041206,
            "children": []
          }
        ]
      },
      {
        "code": "360400",
        "name": "九江市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 115.992811,
        "children": [
          {
            "code": "360402",
            "name": "濂溪区",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.99012,
            "children": []
          },
          {
            "code": "360403",
            "name": "浔阳区",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.995947,
            "children": []
          },
          {
            "code": "360404",
            "name": "柴桑区",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.892977,
            "children": []
          },
          {
            "code": "360423",
            "name": "武宁县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.105646,
            "children": []
          },
          {
            "code": "360424",
            "name": "修水县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 114.573428,
            "children": []
          },
          {
            "code": "360425",
            "name": "永修县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.809055,
            "children": []
          },
          {
            "code": "360426",
            "name": "德安县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.762611,
            "children": []
          },
          {
            "code": "360428",
            "name": "都昌县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 116.205114,
            "children": []
          },
          {
            "code": "360429",
            "name": "湖口县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 116.244313,
            "children": []
          },
          {
            "code": "360430",
            "name": "彭泽县",
            "level": "district",
            "parentCode": "360400",
            "longitude": 116.55584,
            "children": []
          },
          {
            "code": "360481",
            "name": "瑞昌市",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.669081,
            "children": []
          },
          {
            "code": "360482",
            "name": "共青城市",
            "level": "district",
            "parentCode": "360400",
            "longitude": 115.805712,
            "children": []
          },
          {
            "code": "360483",
            "name": "庐山市",
            "level": "district",
            "parentCode": "360400",
            "longitude": 116.043743,
            "children": []
          }
        ]
      },
      {
        "code": "360500",
        "name": "新余市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 114.930835,
        "children": [
          {
            "code": "360502",
            "name": "渝水区",
            "level": "district",
            "parentCode": "360500",
            "longitude": 114.923923,
            "children": []
          },
          {
            "code": "360521",
            "name": "分宜县",
            "level": "district",
            "parentCode": "360500",
            "longitude": 114.675262,
            "children": []
          }
        ]
      },
      {
        "code": "360600",
        "name": "鹰潭市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 117.033838,
        "children": [
          {
            "code": "360602",
            "name": "月湖区",
            "level": "district",
            "parentCode": "360600",
            "longitude": 117.034112,
            "children": []
          },
          {
            "code": "360603",
            "name": "余江区",
            "level": "district",
            "parentCode": "360600",
            "longitude": 116.822763,
            "children": []
          },
          {
            "code": "360681",
            "name": "贵溪市",
            "level": "district",
            "parentCode": "360600",
            "longitude": 117.212103,
            "children": []
          }
        ]
      },
      {
        "code": "360700",
        "name": "赣州市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 114.940278,
        "children": [
          {
            "code": "360702",
            "name": "章贡区",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.93872,
            "children": []
          },
          {
            "code": "360703",
            "name": "南康区",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.756933,
            "children": []
          },
          {
            "code": "360704",
            "name": "赣县区",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.018461,
            "children": []
          },
          {
            "code": "360722",
            "name": "信丰县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.930893,
            "children": []
          },
          {
            "code": "360723",
            "name": "大余县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.362243,
            "children": []
          },
          {
            "code": "360724",
            "name": "上犹县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.540537,
            "children": []
          },
          {
            "code": "360725",
            "name": "崇义县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.307348,
            "children": []
          },
          {
            "code": "360726",
            "name": "安远县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.392328,
            "children": []
          },
          {
            "code": "360728",
            "name": "定南县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.03267,
            "children": []
          },
          {
            "code": "360729",
            "name": "全南县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.531589,
            "children": []
          },
          {
            "code": "360730",
            "name": "宁都县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 116.018782,
            "children": []
          },
          {
            "code": "360731",
            "name": "于都县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.411198,
            "children": []
          },
          {
            "code": "360732",
            "name": "兴国县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.351896,
            "children": []
          },
          {
            "code": "360733",
            "name": "会昌县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.791158,
            "children": []
          },
          {
            "code": "360734",
            "name": "寻乌县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 115.651399,
            "children": []
          },
          {
            "code": "360735",
            "name": "石城县",
            "level": "district",
            "parentCode": "360700",
            "longitude": 116.342249,
            "children": []
          },
          {
            "code": "360781",
            "name": "瑞金市",
            "level": "district",
            "parentCode": "360700",
            "longitude": 116.034854,
            "children": []
          },
          {
            "code": "360783",
            "name": "龙南市",
            "level": "district",
            "parentCode": "360700",
            "longitude": 114.792657,
            "children": []
          }
        ]
      },
      {
        "code": "360800",
        "name": "吉安市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 114.986373,
        "children": [
          {
            "code": "360802",
            "name": "吉州区",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.987331,
            "children": []
          },
          {
            "code": "360803",
            "name": "青原区",
            "level": "district",
            "parentCode": "360800",
            "longitude": 115.016306,
            "children": []
          },
          {
            "code": "360821",
            "name": "吉安县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.905117,
            "children": []
          },
          {
            "code": "360822",
            "name": "吉水县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 115.134569,
            "children": []
          },
          {
            "code": "360823",
            "name": "峡江县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 115.319331,
            "children": []
          },
          {
            "code": "360824",
            "name": "新干县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 115.399294,
            "children": []
          },
          {
            "code": "360825",
            "name": "永丰县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 115.435559,
            "children": []
          },
          {
            "code": "360826",
            "name": "泰和县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.901393,
            "children": []
          },
          {
            "code": "360827",
            "name": "遂川县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.51689,
            "children": []
          },
          {
            "code": "360828",
            "name": "万安县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.784694,
            "children": []
          },
          {
            "code": "360829",
            "name": "安福县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.61384,
            "children": []
          },
          {
            "code": "360830",
            "name": "永新县",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.242534,
            "children": []
          },
          {
            "code": "360881",
            "name": "井冈山市",
            "level": "district",
            "parentCode": "360800",
            "longitude": 114.284421,
            "children": []
          }
        ]
      },
      {
        "code": "360900",
        "name": "宜春市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 114.391136,
        "children": [
          {
            "code": "360902",
            "name": "袁州区",
            "level": "district",
            "parentCode": "360900",
            "longitude": 114.387379,
            "children": []
          },
          {
            "code": "360921",
            "name": "奉新县",
            "level": "district",
            "parentCode": "360900",
            "longitude": 115.389899,
            "children": []
          },
          {
            "code": "360922",
            "name": "万载县",
            "level": "district",
            "parentCode": "360900",
            "longitude": 114.449012,
            "children": []
          },
          {
            "code": "360923",
            "name": "上高县",
            "level": "district",
            "parentCode": "360900",
            "longitude": 114.932653,
            "children": []
          },
          {
            "code": "360924",
            "name": "宜丰县",
            "level": "district",
            "parentCode": "360900",
            "longitude": 114.787381,
            "children": []
          },
          {
            "code": "360925",
            "name": "靖安县",
            "level": "district",
            "parentCode": "360900",
            "longitude": 115.361744,
            "children": []
          },
          {
            "code": "360926",
            "name": "铜鼓县",
            "level": "district",
            "parentCode": "360900",
            "longitude": 114.37014,
            "children": []
          },
          {
            "code": "360981",
            "name": "丰城市",
            "level": "district",
            "parentCode": "360900",
            "longitude": 115.786005,
            "children": []
          },
          {
            "code": "360982",
            "name": "樟树市",
            "level": "district",
            "parentCode": "360900",
            "longitude": 115.543388,
            "children": []
          },
          {
            "code": "360983",
            "name": "高安市",
            "level": "district",
            "parentCode": "360900",
            "longitude": 115.381527,
            "children": []
          }
        ]
      },
      {
        "code": "361000",
        "name": "抚州市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 116.358351,
        "children": [
          {
            "code": "361002",
            "name": "临川区",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.361404,
            "children": []
          },
          {
            "code": "361003",
            "name": "东乡区",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.605341,
            "children": []
          },
          {
            "code": "361021",
            "name": "南城县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.63945,
            "children": []
          },
          {
            "code": "361022",
            "name": "黎川县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.91457,
            "children": []
          },
          {
            "code": "361023",
            "name": "南丰县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.532994,
            "children": []
          },
          {
            "code": "361024",
            "name": "崇仁县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.059109,
            "children": []
          },
          {
            "code": "361025",
            "name": "乐安县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 115.838432,
            "children": []
          },
          {
            "code": "361026",
            "name": "宜黄县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.223023,
            "children": []
          },
          {
            "code": "361027",
            "name": "金溪县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.778751,
            "children": []
          },
          {
            "code": "361028",
            "name": "资溪县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 117.066095,
            "children": []
          },
          {
            "code": "361030",
            "name": "广昌县",
            "level": "district",
            "parentCode": "361000",
            "longitude": 116.327291,
            "children": []
          }
        ]
      },
      {
        "code": "361100",
        "name": "上饶市",
        "level": "city",
        "parentCode": "360000",
        "longitude": 117.971185,
        "children": [
          {
            "code": "361102",
            "name": "信州区",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.970522,
            "children": []
          },
          {
            "code": "361103",
            "name": "广丰区",
            "level": "district",
            "parentCode": "361100",
            "longitude": 118.189852,
            "children": []
          },
          {
            "code": "361104",
            "name": "广信区",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.90612,
            "children": []
          },
          {
            "code": "361123",
            "name": "玉山县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 118.244408,
            "children": []
          },
          {
            "code": "361124",
            "name": "铅山县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.711906,
            "children": []
          },
          {
            "code": "361125",
            "name": "横峰县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.608247,
            "children": []
          },
          {
            "code": "361126",
            "name": "弋阳县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.435002,
            "children": []
          },
          {
            "code": "361127",
            "name": "余干县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 116.691072,
            "children": []
          },
          {
            "code": "361128",
            "name": "鄱阳县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 116.673748,
            "children": []
          },
          {
            "code": "361129",
            "name": "万年县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.07015,
            "children": []
          },
          {
            "code": "361130",
            "name": "婺源县",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.86219,
            "children": []
          },
          {
            "code": "361181",
            "name": "德兴市",
            "level": "district",
            "parentCode": "361100",
            "longitude": 117.578732,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "370000",
    "name": "山东省",
    "level": "province",
    "longitude": 117.000923,
    "children": [
      {
        "code": "370100",
        "name": "济南市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 117.000923,
        "children": [
          {
            "code": "370102",
            "name": "历下区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.03862,
            "children": []
          },
          {
            "code": "370103",
            "name": "市中区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 116.99898,
            "children": []
          },
          {
            "code": "370104",
            "name": "槐荫区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 116.947921,
            "children": []
          },
          {
            "code": "370105",
            "name": "天桥区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 116.996086,
            "children": []
          },
          {
            "code": "370112",
            "name": "历城区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.063744,
            "children": []
          },
          {
            "code": "370113",
            "name": "长清区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 116.74588,
            "children": []
          },
          {
            "code": "370114",
            "name": "章丘区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.54069,
            "children": []
          },
          {
            "code": "370115",
            "name": "济阳区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.176035,
            "children": []
          },
          {
            "code": "370116",
            "name": "莱芜区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.675808,
            "children": []
          },
          {
            "code": "370117",
            "name": "钢城区",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.82033,
            "children": []
          },
          {
            "code": "370124",
            "name": "平阴县",
            "level": "district",
            "parentCode": "370100",
            "longitude": 116.455054,
            "children": []
          },
          {
            "code": "370126",
            "name": "商河县",
            "level": "district",
            "parentCode": "370100",
            "longitude": 117.156369,
            "children": []
          }
        ]
      },
      {
        "code": "370200",
        "name": "青岛市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 120.355173,
        "children": [
          {
            "code": "370202",
            "name": "市南区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.395966,
            "children": []
          },
          {
            "code": "370203",
            "name": "市北区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.355026,
            "children": []
          },
          {
            "code": "370211",
            "name": "黄岛区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 119.995518,
            "children": []
          },
          {
            "code": "370212",
            "name": "崂山区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.467393,
            "children": []
          },
          {
            "code": "370213",
            "name": "李沧区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.421236,
            "children": []
          },
          {
            "code": "370214",
            "name": "城阳区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.389135,
            "children": []
          },
          {
            "code": "370215",
            "name": "即墨区",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.447352,
            "children": []
          },
          {
            "code": "370281",
            "name": "胶州市",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.006202,
            "children": []
          },
          {
            "code": "370283",
            "name": "平度市",
            "level": "district",
            "parentCode": "370200",
            "longitude": 119.959012,
            "children": []
          },
          {
            "code": "370285",
            "name": "莱西市",
            "level": "district",
            "parentCode": "370200",
            "longitude": 120.526226,
            "children": []
          }
        ]
      },
      {
        "code": "370300",
        "name": "淄博市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 118.047648,
        "children": [
          {
            "code": "370302",
            "name": "淄川区",
            "level": "district",
            "parentCode": "370300",
            "longitude": 117.967696,
            "children": []
          },
          {
            "code": "370303",
            "name": "张店区",
            "level": "district",
            "parentCode": "370300",
            "longitude": 118.053521,
            "children": []
          },
          {
            "code": "370304",
            "name": "博山区",
            "level": "district",
            "parentCode": "370300",
            "longitude": 117.85823,
            "children": []
          },
          {
            "code": "370305",
            "name": "临淄区",
            "level": "district",
            "parentCode": "370300",
            "longitude": 118.306018,
            "children": []
          },
          {
            "code": "370306",
            "name": "周村区",
            "level": "district",
            "parentCode": "370300",
            "longitude": 117.851036,
            "children": []
          },
          {
            "code": "370321",
            "name": "桓台县",
            "level": "district",
            "parentCode": "370300",
            "longitude": 118.101556,
            "children": []
          },
          {
            "code": "370322",
            "name": "高青县",
            "level": "district",
            "parentCode": "370300",
            "longitude": 117.829839,
            "children": []
          },
          {
            "code": "370323",
            "name": "沂源县",
            "level": "district",
            "parentCode": "370300",
            "longitude": 118.166161,
            "children": []
          }
        ]
      },
      {
        "code": "370400",
        "name": "枣庄市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 117.557964,
        "children": [
          {
            "code": "370402",
            "name": "市中区",
            "level": "district",
            "parentCode": "370400",
            "longitude": 117.557281,
            "children": []
          },
          {
            "code": "370403",
            "name": "薛城区",
            "level": "district",
            "parentCode": "370400",
            "longitude": 117.265293,
            "children": []
          },
          {
            "code": "370404",
            "name": "峄城区",
            "level": "district",
            "parentCode": "370400",
            "longitude": 117.586316,
            "children": []
          },
          {
            "code": "370405",
            "name": "台儿庄区",
            "level": "district",
            "parentCode": "370400",
            "longitude": 117.734747,
            "children": []
          },
          {
            "code": "370406",
            "name": "山亭区",
            "level": "district",
            "parentCode": "370400",
            "longitude": 117.458968,
            "children": []
          },
          {
            "code": "370481",
            "name": "滕州市",
            "level": "district",
            "parentCode": "370400",
            "longitude": 117.162098,
            "children": []
          }
        ]
      },
      {
        "code": "370500",
        "name": "东营市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 118.66471,
        "children": [
          {
            "code": "370502",
            "name": "东营区",
            "level": "district",
            "parentCode": "370500",
            "longitude": 118.507543,
            "children": []
          },
          {
            "code": "370503",
            "name": "河口区",
            "level": "district",
            "parentCode": "370500",
            "longitude": 118.529613,
            "children": []
          },
          {
            "code": "370505",
            "name": "垦利区",
            "level": "district",
            "parentCode": "370500",
            "longitude": 118.551314,
            "children": []
          },
          {
            "code": "370522",
            "name": "利津县",
            "level": "district",
            "parentCode": "370500",
            "longitude": 118.248854,
            "children": []
          },
          {
            "code": "370523",
            "name": "广饶县",
            "level": "district",
            "parentCode": "370500",
            "longitude": 118.407522,
            "children": []
          }
        ]
      },
      {
        "code": "370600",
        "name": "烟台市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 121.391382,
        "children": [
          {
            "code": "370602",
            "name": "芝罘区",
            "level": "district",
            "parentCode": "370600",
            "longitude": 121.385877,
            "children": []
          },
          {
            "code": "370611",
            "name": "福山区",
            "level": "district",
            "parentCode": "370600",
            "longitude": 121.264741,
            "children": []
          },
          {
            "code": "370612",
            "name": "牟平区",
            "level": "district",
            "parentCode": "370600",
            "longitude": 121.60151,
            "children": []
          },
          {
            "code": "370613",
            "name": "莱山区",
            "level": "district",
            "parentCode": "370600",
            "longitude": 121.448866,
            "children": []
          },
          {
            "code": "370614",
            "name": "蓬莱区",
            "level": "district",
            "parentCode": "370600",
            "longitude": 120.759074,
            "children": []
          },
          {
            "code": "370681",
            "name": "龙口市",
            "level": "district",
            "parentCode": "370600",
            "longitude": 120.528328,
            "children": []
          },
          {
            "code": "370682",
            "name": "莱阳市",
            "level": "district",
            "parentCode": "370600",
            "longitude": 120.711151,
            "children": []
          },
          {
            "code": "370683",
            "name": "莱州市",
            "level": "district",
            "parentCode": "370600",
            "longitude": 119.942135,
            "children": []
          },
          {
            "code": "370685",
            "name": "招远市",
            "level": "district",
            "parentCode": "370600",
            "longitude": 120.403142,
            "children": []
          },
          {
            "code": "370686",
            "name": "栖霞市",
            "level": "district",
            "parentCode": "370600",
            "longitude": 120.834097,
            "children": []
          },
          {
            "code": "370687",
            "name": "海阳市",
            "level": "district",
            "parentCode": "370600",
            "longitude": 121.168392,
            "children": []
          }
        ]
      },
      {
        "code": "370700",
        "name": "潍坊市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 119.107078,
        "children": [
          {
            "code": "370702",
            "name": "潍城区",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.103784,
            "children": []
          },
          {
            "code": "370703",
            "name": "寒亭区",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.207866,
            "children": []
          },
          {
            "code": "370704",
            "name": "坊子区",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.166326,
            "children": []
          },
          {
            "code": "370705",
            "name": "奎文区",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.137357,
            "children": []
          },
          {
            "code": "370724",
            "name": "临朐县",
            "level": "district",
            "parentCode": "370700",
            "longitude": 118.539876,
            "children": []
          },
          {
            "code": "370725",
            "name": "昌乐县",
            "level": "district",
            "parentCode": "370700",
            "longitude": 118.839995,
            "children": []
          },
          {
            "code": "370781",
            "name": "青州市",
            "level": "district",
            "parentCode": "370700",
            "longitude": 118.484693,
            "children": []
          },
          {
            "code": "370782",
            "name": "诸城市",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.403182,
            "children": []
          },
          {
            "code": "370783",
            "name": "寿光市",
            "level": "district",
            "parentCode": "370700",
            "longitude": 118.736451,
            "children": []
          },
          {
            "code": "370784",
            "name": "安丘市",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.206886,
            "children": []
          },
          {
            "code": "370785",
            "name": "高密市",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.757033,
            "children": []
          },
          {
            "code": "370786",
            "name": "昌邑市",
            "level": "district",
            "parentCode": "370700",
            "longitude": 119.394502,
            "children": []
          }
        ]
      },
      {
        "code": "370800",
        "name": "济宁市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 116.587245,
        "children": [
          {
            "code": "370811",
            "name": "任城区",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.595261,
            "children": []
          },
          {
            "code": "370812",
            "name": "兖州区",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.828996,
            "children": []
          },
          {
            "code": "370826",
            "name": "微山县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 117.12861,
            "children": []
          },
          {
            "code": "370827",
            "name": "鱼台县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.650023,
            "children": []
          },
          {
            "code": "370828",
            "name": "金乡县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.310364,
            "children": []
          },
          {
            "code": "370829",
            "name": "嘉祥县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.342885,
            "children": []
          },
          {
            "code": "370830",
            "name": "汶上县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.487146,
            "children": []
          },
          {
            "code": "370831",
            "name": "泗水县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 117.273605,
            "children": []
          },
          {
            "code": "370832",
            "name": "梁山县",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.08963,
            "children": []
          },
          {
            "code": "370881",
            "name": "曲阜市",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.991885,
            "children": []
          },
          {
            "code": "370883",
            "name": "邹城市",
            "level": "district",
            "parentCode": "370800",
            "longitude": 116.96673,
            "children": []
          }
        ]
      },
      {
        "code": "370900",
        "name": "泰安市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 117.129063,
        "children": [
          {
            "code": "370902",
            "name": "泰山区",
            "level": "district",
            "parentCode": "370900",
            "longitude": 117.129984,
            "children": []
          },
          {
            "code": "370911",
            "name": "岱岳区",
            "level": "district",
            "parentCode": "370900",
            "longitude": 117.04353,
            "children": []
          },
          {
            "code": "370921",
            "name": "宁阳县",
            "level": "district",
            "parentCode": "370900",
            "longitude": 116.799297,
            "children": []
          },
          {
            "code": "370923",
            "name": "东平县",
            "level": "district",
            "parentCode": "370900",
            "longitude": 116.461052,
            "children": []
          },
          {
            "code": "370982",
            "name": "新泰市",
            "level": "district",
            "parentCode": "370900",
            "longitude": 117.766092,
            "children": []
          },
          {
            "code": "370983",
            "name": "肥城市",
            "level": "district",
            "parentCode": "370900",
            "longitude": 116.763703,
            "children": []
          }
        ]
      },
      {
        "code": "371000",
        "name": "威海市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 122.116394,
        "children": [
          {
            "code": "371002",
            "name": "环翠区",
            "level": "district",
            "parentCode": "371000",
            "longitude": 122.116189,
            "children": []
          },
          {
            "code": "371003",
            "name": "文登区",
            "level": "district",
            "parentCode": "371000",
            "longitude": 122.057139,
            "children": []
          },
          {
            "code": "371082",
            "name": "荣成市",
            "level": "district",
            "parentCode": "371000",
            "longitude": 122.422896,
            "children": []
          },
          {
            "code": "371083",
            "name": "乳山市",
            "level": "district",
            "parentCode": "371000",
            "longitude": 121.536346,
            "children": []
          }
        ]
      },
      {
        "code": "371100",
        "name": "日照市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 119.461208,
        "children": [
          {
            "code": "371102",
            "name": "东港区",
            "level": "district",
            "parentCode": "371100",
            "longitude": 119.457703,
            "children": []
          },
          {
            "code": "371103",
            "name": "岚山区",
            "level": "district",
            "parentCode": "371100",
            "longitude": 119.315844,
            "children": []
          },
          {
            "code": "371121",
            "name": "五莲县",
            "level": "district",
            "parentCode": "371100",
            "longitude": 119.206745,
            "children": []
          },
          {
            "code": "371122",
            "name": "莒县",
            "level": "district",
            "parentCode": "371100",
            "longitude": 118.832859,
            "children": []
          }
        ]
      },
      {
        "code": "371300",
        "name": "临沂市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 118.326443,
        "children": [
          {
            "code": "371302",
            "name": "兰山区",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.327667,
            "children": []
          },
          {
            "code": "371311",
            "name": "罗庄区",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.284795,
            "children": []
          },
          {
            "code": "371312",
            "name": "河东区",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.398296,
            "children": []
          },
          {
            "code": "371321",
            "name": "沂南县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.455395,
            "children": []
          },
          {
            "code": "371322",
            "name": "郯城县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.342963,
            "children": []
          },
          {
            "code": "371323",
            "name": "沂水县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.634543,
            "children": []
          },
          {
            "code": "371324",
            "name": "兰陵县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.049968,
            "children": []
          },
          {
            "code": "371325",
            "name": "费县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 117.968869,
            "children": []
          },
          {
            "code": "371326",
            "name": "平邑县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 117.631884,
            "children": []
          },
          {
            "code": "371327",
            "name": "莒南县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.838322,
            "children": []
          },
          {
            "code": "371328",
            "name": "蒙阴县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 117.943271,
            "children": []
          },
          {
            "code": "371329",
            "name": "临沭县",
            "level": "district",
            "parentCode": "371300",
            "longitude": 118.648379,
            "children": []
          }
        ]
      },
      {
        "code": "371400",
        "name": "德州市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 116.307428,
        "children": [
          {
            "code": "371402",
            "name": "德城区",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.307076,
            "children": []
          },
          {
            "code": "371403",
            "name": "陵城区",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.574929,
            "children": []
          },
          {
            "code": "371422",
            "name": "宁津县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.79372,
            "children": []
          },
          {
            "code": "371423",
            "name": "庆云县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 117.390507,
            "children": []
          },
          {
            "code": "371424",
            "name": "临邑县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.867028,
            "children": []
          },
          {
            "code": "371425",
            "name": "齐河县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.758394,
            "children": []
          },
          {
            "code": "371426",
            "name": "平原县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.433904,
            "children": []
          },
          {
            "code": "371427",
            "name": "夏津县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.003816,
            "children": []
          },
          {
            "code": "371428",
            "name": "武城县",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.078627,
            "children": []
          },
          {
            "code": "371481",
            "name": "乐陵市",
            "level": "district",
            "parentCode": "371400",
            "longitude": 117.216657,
            "children": []
          },
          {
            "code": "371482",
            "name": "禹城市",
            "level": "district",
            "parentCode": "371400",
            "longitude": 116.642554,
            "children": []
          }
        ]
      },
      {
        "code": "371500",
        "name": "聊城市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 115.980367,
        "children": [
          {
            "code": "371502",
            "name": "东昌府区",
            "level": "district",
            "parentCode": "371500",
            "longitude": 115.980023,
            "children": []
          },
          {
            "code": "371503",
            "name": "茌平区",
            "level": "district",
            "parentCode": "371500",
            "longitude": 116.25335,
            "children": []
          },
          {
            "code": "371521",
            "name": "阳谷县",
            "level": "district",
            "parentCode": "371500",
            "longitude": 115.784287,
            "children": []
          },
          {
            "code": "371522",
            "name": "莘县",
            "level": "district",
            "parentCode": "371500",
            "longitude": 115.667291,
            "children": []
          },
          {
            "code": "371524",
            "name": "东阿县",
            "level": "district",
            "parentCode": "371500",
            "longitude": 116.248855,
            "children": []
          },
          {
            "code": "371525",
            "name": "冠县",
            "level": "district",
            "parentCode": "371500",
            "longitude": 115.444808,
            "children": []
          },
          {
            "code": "371526",
            "name": "高唐县",
            "level": "district",
            "parentCode": "371500",
            "longitude": 116.229662,
            "children": []
          },
          {
            "code": "371581",
            "name": "临清市",
            "level": "district",
            "parentCode": "371500",
            "longitude": 115.713462,
            "children": []
          }
        ]
      },
      {
        "code": "371600",
        "name": "滨州市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 118.016974,
        "children": [
          {
            "code": "371602",
            "name": "滨城区",
            "level": "district",
            "parentCode": "371600",
            "longitude": 118.020149,
            "children": []
          },
          {
            "code": "371603",
            "name": "沾化区",
            "level": "district",
            "parentCode": "371600",
            "longitude": 118.129902,
            "children": []
          },
          {
            "code": "371621",
            "name": "惠民县",
            "level": "district",
            "parentCode": "371600",
            "longitude": 117.508941,
            "children": []
          },
          {
            "code": "371622",
            "name": "阳信县",
            "level": "district",
            "parentCode": "371600",
            "longitude": 117.581326,
            "children": []
          },
          {
            "code": "371623",
            "name": "无棣县",
            "level": "district",
            "parentCode": "371600",
            "longitude": 117.616325,
            "children": []
          },
          {
            "code": "371625",
            "name": "博兴县",
            "level": "district",
            "parentCode": "371600",
            "longitude": 118.123096,
            "children": []
          },
          {
            "code": "371681",
            "name": "邹平市",
            "level": "district",
            "parentCode": "371600",
            "longitude": 117.736807,
            "children": []
          }
        ]
      },
      {
        "code": "371700",
        "name": "菏泽市",
        "level": "city",
        "parentCode": "370000",
        "longitude": 115.469381,
        "children": [
          {
            "code": "371702",
            "name": "牡丹区",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.470946,
            "children": []
          },
          {
            "code": "371703",
            "name": "定陶区",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.569601,
            "children": []
          },
          {
            "code": "371721",
            "name": "曹县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.549482,
            "children": []
          },
          {
            "code": "371722",
            "name": "单县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 116.08262,
            "children": []
          },
          {
            "code": "371723",
            "name": "成武县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.897349,
            "children": []
          },
          {
            "code": "371724",
            "name": "巨野县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 116.089341,
            "children": []
          },
          {
            "code": "371725",
            "name": "郓城县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.93885,
            "children": []
          },
          {
            "code": "371726",
            "name": "鄄城县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.51434,
            "children": []
          },
          {
            "code": "371728",
            "name": "东明县",
            "level": "district",
            "parentCode": "371700",
            "longitude": 115.098412,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "410000",
    "name": "河南省",
    "level": "province",
    "longitude": 113.665412,
    "children": [
      {
        "code": "410100",
        "name": "郑州市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 113.665412,
        "children": [
          {
            "code": "410102",
            "name": "中原区",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.611576,
            "children": []
          },
          {
            "code": "410103",
            "name": "二七区",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.645422,
            "children": []
          },
          {
            "code": "410104",
            "name": "管城回族区",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.685313,
            "children": []
          },
          {
            "code": "410105",
            "name": "金水区",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.686037,
            "children": []
          },
          {
            "code": "410106",
            "name": "上街区",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.298282,
            "children": []
          },
          {
            "code": "410108",
            "name": "惠济区",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.61836,
            "children": []
          },
          {
            "code": "410122",
            "name": "中牟县",
            "level": "district",
            "parentCode": "410100",
            "longitude": 114.022521,
            "children": []
          },
          {
            "code": "410181",
            "name": "巩义市",
            "level": "district",
            "parentCode": "410100",
            "longitude": 112.98283,
            "children": []
          },
          {
            "code": "410182",
            "name": "荥阳市",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.391523,
            "children": []
          },
          {
            "code": "410183",
            "name": "新密市",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.380616,
            "children": []
          },
          {
            "code": "410184",
            "name": "新郑市",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.73967,
            "children": []
          },
          {
            "code": "410185",
            "name": "登封市",
            "level": "district",
            "parentCode": "410100",
            "longitude": 113.037768,
            "children": []
          }
        ]
      },
      {
        "code": "410200",
        "name": "开封市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.341447,
        "children": [
          {
            "code": "410202",
            "name": "龙亭区",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.353348,
            "children": []
          },
          {
            "code": "410203",
            "name": "顺河回族区",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.364875,
            "children": []
          },
          {
            "code": "410204",
            "name": "鼓楼区",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.3485,
            "children": []
          },
          {
            "code": "410205",
            "name": "禹王台区",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.350246,
            "children": []
          },
          {
            "code": "410212",
            "name": "祥符区",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.437622,
            "children": []
          },
          {
            "code": "410221",
            "name": "杞县",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.770472,
            "children": []
          },
          {
            "code": "410222",
            "name": "通许县",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.467734,
            "children": []
          },
          {
            "code": "410223",
            "name": "尉氏县",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.193927,
            "children": []
          },
          {
            "code": "410225",
            "name": "兰考县",
            "level": "district",
            "parentCode": "410200",
            "longitude": 114.820572,
            "children": []
          }
        ]
      },
      {
        "code": "410300",
        "name": "洛阳市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 112.434468,
        "children": [
          {
            "code": "410302",
            "name": "老城区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.477298,
            "children": []
          },
          {
            "code": "410303",
            "name": "西工区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.443232,
            "children": []
          },
          {
            "code": "410304",
            "name": "瀍河回族区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.491625,
            "children": []
          },
          {
            "code": "410305",
            "name": "涧西区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.399243,
            "children": []
          },
          {
            "code": "410306",
            "name": "孟津区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.443892,
            "children": []
          },
          {
            "code": "410311",
            "name": "洛龙区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.456634,
            "children": []
          },
          {
            "code": "410323",
            "name": "新安县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.141403,
            "children": []
          },
          {
            "code": "410324",
            "name": "栾川县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 111.618386,
            "children": []
          },
          {
            "code": "410325",
            "name": "嵩县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.087765,
            "children": []
          },
          {
            "code": "410326",
            "name": "汝阳县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.473789,
            "children": []
          },
          {
            "code": "410327",
            "name": "宜阳县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.179989,
            "children": []
          },
          {
            "code": "410328",
            "name": "洛宁县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 111.655399,
            "children": []
          },
          {
            "code": "410329",
            "name": "伊川县",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.429384,
            "children": []
          },
          {
            "code": "410381",
            "name": "偃师区",
            "level": "district",
            "parentCode": "410300",
            "longitude": 112.787739,
            "children": []
          }
        ]
      },
      {
        "code": "410400",
        "name": "平顶山市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 113.307718,
        "children": [
          {
            "code": "410402",
            "name": "新华区",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.299061,
            "children": []
          },
          {
            "code": "410403",
            "name": "卫东区",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.310327,
            "children": []
          },
          {
            "code": "410404",
            "name": "石龙区",
            "level": "district",
            "parentCode": "410400",
            "longitude": 112.889885,
            "children": []
          },
          {
            "code": "410411",
            "name": "湛河区",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.320873,
            "children": []
          },
          {
            "code": "410421",
            "name": "宝丰县",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.066812,
            "children": []
          },
          {
            "code": "410422",
            "name": "叶县",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.358298,
            "children": []
          },
          {
            "code": "410423",
            "name": "鲁山县",
            "level": "district",
            "parentCode": "410400",
            "longitude": 112.906703,
            "children": []
          },
          {
            "code": "410425",
            "name": "郏县",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.220451,
            "children": []
          },
          {
            "code": "410481",
            "name": "舞钢市",
            "level": "district",
            "parentCode": "410400",
            "longitude": 113.52625,
            "children": []
          },
          {
            "code": "410482",
            "name": "汝州市",
            "level": "district",
            "parentCode": "410400",
            "longitude": 112.845336,
            "children": []
          }
        ]
      },
      {
        "code": "410500",
        "name": "安阳市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.352482,
        "children": [
          {
            "code": "410502",
            "name": "文峰区",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.352562,
            "children": []
          },
          {
            "code": "410503",
            "name": "北关区",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.352646,
            "children": []
          },
          {
            "code": "410505",
            "name": "殷都区",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.300098,
            "children": []
          },
          {
            "code": "410506",
            "name": "龙安区",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.323522,
            "children": []
          },
          {
            "code": "410522",
            "name": "安阳县",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.130207,
            "children": []
          },
          {
            "code": "410523",
            "name": "汤阴县",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.362357,
            "children": []
          },
          {
            "code": "410526",
            "name": "滑县",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.524,
            "children": []
          },
          {
            "code": "410527",
            "name": "内黄县",
            "level": "district",
            "parentCode": "410500",
            "longitude": 114.904582,
            "children": []
          },
          {
            "code": "410581",
            "name": "林州市",
            "level": "district",
            "parentCode": "410500",
            "longitude": 113.823767,
            "children": []
          }
        ]
      },
      {
        "code": "410600",
        "name": "鹤壁市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.295444,
        "children": [
          {
            "code": "410602",
            "name": "鹤山区",
            "level": "district",
            "parentCode": "410600",
            "longitude": 114.166551,
            "children": []
          },
          {
            "code": "410603",
            "name": "山城区",
            "level": "district",
            "parentCode": "410600",
            "longitude": 114.184202,
            "children": []
          },
          {
            "code": "410611",
            "name": "淇滨区",
            "level": "district",
            "parentCode": "410600",
            "longitude": 114.293917,
            "children": []
          },
          {
            "code": "410621",
            "name": "浚县",
            "level": "district",
            "parentCode": "410600",
            "longitude": 114.550162,
            "children": []
          },
          {
            "code": "410622",
            "name": "淇县",
            "level": "district",
            "parentCode": "410600",
            "longitude": 114.200379,
            "children": []
          }
        ]
      },
      {
        "code": "410700",
        "name": "新乡市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 113.883991,
        "children": [
          {
            "code": "410702",
            "name": "红旗区",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.878158,
            "children": []
          },
          {
            "code": "410703",
            "name": "卫滨区",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.866065,
            "children": []
          },
          {
            "code": "410704",
            "name": "凤泉区",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.906712,
            "children": []
          },
          {
            "code": "410711",
            "name": "牧野区",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.89716,
            "children": []
          },
          {
            "code": "410721",
            "name": "新乡县",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.806186,
            "children": []
          },
          {
            "code": "410724",
            "name": "获嘉县",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.657249,
            "children": []
          },
          {
            "code": "410725",
            "name": "原阳县",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.965966,
            "children": []
          },
          {
            "code": "410726",
            "name": "延津县",
            "level": "district",
            "parentCode": "410700",
            "longitude": 114.200982,
            "children": []
          },
          {
            "code": "410727",
            "name": "封丘县",
            "level": "district",
            "parentCode": "410700",
            "longitude": 114.423405,
            "children": []
          },
          {
            "code": "410781",
            "name": "卫辉市",
            "level": "district",
            "parentCode": "410700",
            "longitude": 114.065855,
            "children": []
          },
          {
            "code": "410782",
            "name": "辉县市",
            "level": "district",
            "parentCode": "410700",
            "longitude": 113.802518,
            "children": []
          },
          {
            "code": "410783",
            "name": "长垣市",
            "level": "district",
            "parentCode": "410700",
            "longitude": 114.673807,
            "children": []
          }
        ]
      },
      {
        "code": "410800",
        "name": "焦作市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 113.238266,
        "children": [
          {
            "code": "410802",
            "name": "解放区",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.226126,
            "children": []
          },
          {
            "code": "410803",
            "name": "中站区",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.175485,
            "children": []
          },
          {
            "code": "410804",
            "name": "马村区",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.321703,
            "children": []
          },
          {
            "code": "410811",
            "name": "山阳区",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.26766,
            "children": []
          },
          {
            "code": "410821",
            "name": "修武县",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.447465,
            "children": []
          },
          {
            "code": "410822",
            "name": "博爱县",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.069313,
            "children": []
          },
          {
            "code": "410823",
            "name": "武陟县",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.408334,
            "children": []
          },
          {
            "code": "410825",
            "name": "温县",
            "level": "district",
            "parentCode": "410800",
            "longitude": 113.079118,
            "children": []
          },
          {
            "code": "410882",
            "name": "沁阳市",
            "level": "district",
            "parentCode": "410800",
            "longitude": 112.934538,
            "children": []
          },
          {
            "code": "410883",
            "name": "孟州市",
            "level": "district",
            "parentCode": "410800",
            "longitude": 112.78708,
            "children": []
          }
        ]
      },
      {
        "code": "410900",
        "name": "濮阳市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 115.041299,
        "children": [
          {
            "code": "410902",
            "name": "华龙区",
            "level": "district",
            "parentCode": "410900",
            "longitude": 115.03184,
            "children": []
          },
          {
            "code": "410922",
            "name": "清丰县",
            "level": "district",
            "parentCode": "410900",
            "longitude": 115.107287,
            "children": []
          },
          {
            "code": "410923",
            "name": "南乐县",
            "level": "district",
            "parentCode": "410900",
            "longitude": 115.204336,
            "children": []
          },
          {
            "code": "410926",
            "name": "范县",
            "level": "district",
            "parentCode": "410900",
            "longitude": 115.504212,
            "children": []
          },
          {
            "code": "410927",
            "name": "台前县",
            "level": "district",
            "parentCode": "410900",
            "longitude": 115.855681,
            "children": []
          },
          {
            "code": "410928",
            "name": "濮阳县",
            "level": "district",
            "parentCode": "410900",
            "longitude": 115.023844,
            "children": []
          }
        ]
      },
      {
        "code": "411000",
        "name": "许昌市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 113.826063,
        "children": [
          {
            "code": "411002",
            "name": "魏都区",
            "level": "district",
            "parentCode": "411000",
            "longitude": 113.828307,
            "children": []
          },
          {
            "code": "411003",
            "name": "建安区",
            "level": "district",
            "parentCode": "411000",
            "longitude": 113.842898,
            "children": []
          },
          {
            "code": "411024",
            "name": "鄢陵县",
            "level": "district",
            "parentCode": "411000",
            "longitude": 114.188507,
            "children": []
          },
          {
            "code": "411025",
            "name": "襄城县",
            "level": "district",
            "parentCode": "411000",
            "longitude": 113.493166,
            "children": []
          },
          {
            "code": "411081",
            "name": "禹州市",
            "level": "district",
            "parentCode": "411000",
            "longitude": 113.471316,
            "children": []
          },
          {
            "code": "411082",
            "name": "长葛市",
            "level": "district",
            "parentCode": "411000",
            "longitude": 113.768912,
            "children": []
          }
        ]
      },
      {
        "code": "411100",
        "name": "漯河市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.026405,
        "children": [
          {
            "code": "411102",
            "name": "源汇区",
            "level": "district",
            "parentCode": "411100",
            "longitude": 114.017948,
            "children": []
          },
          {
            "code": "411103",
            "name": "郾城区",
            "level": "district",
            "parentCode": "411100",
            "longitude": 114.016813,
            "children": []
          },
          {
            "code": "411104",
            "name": "召陵区",
            "level": "district",
            "parentCode": "411100",
            "longitude": 114.051686,
            "children": []
          },
          {
            "code": "411121",
            "name": "舞阳县",
            "level": "district",
            "parentCode": "411100",
            "longitude": 113.610565,
            "children": []
          },
          {
            "code": "411122",
            "name": "临颍县",
            "level": "district",
            "parentCode": "411100",
            "longitude": 113.938891,
            "children": []
          }
        ]
      },
      {
        "code": "411200",
        "name": "三门峡市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 111.194099,
        "children": [
          {
            "code": "411202",
            "name": "湖滨区",
            "level": "district",
            "parentCode": "411200",
            "longitude": 111.19487,
            "children": []
          },
          {
            "code": "411203",
            "name": "陕州区",
            "level": "district",
            "parentCode": "411200",
            "longitude": 111.103851,
            "children": []
          },
          {
            "code": "411221",
            "name": "渑池县",
            "level": "district",
            "parentCode": "411200",
            "longitude": 111.762992,
            "children": []
          },
          {
            "code": "411224",
            "name": "卢氏县",
            "level": "district",
            "parentCode": "411200",
            "longitude": 111.052649,
            "children": []
          },
          {
            "code": "411281",
            "name": "义马市",
            "level": "district",
            "parentCode": "411200",
            "longitude": 111.869417,
            "children": []
          },
          {
            "code": "411282",
            "name": "灵宝市",
            "level": "district",
            "parentCode": "411200",
            "longitude": 110.88577,
            "children": []
          }
        ]
      },
      {
        "code": "411300",
        "name": "南阳市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 112.540918,
        "children": [
          {
            "code": "411302",
            "name": "宛城区",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.544591,
            "children": []
          },
          {
            "code": "411303",
            "name": "卧龙区",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.528789,
            "children": []
          },
          {
            "code": "411321",
            "name": "南召县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.435583,
            "children": []
          },
          {
            "code": "411322",
            "name": "方城县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 113.010933,
            "children": []
          },
          {
            "code": "411323",
            "name": "西峡县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 111.485772,
            "children": []
          },
          {
            "code": "411324",
            "name": "镇平县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.232722,
            "children": []
          },
          {
            "code": "411325",
            "name": "内乡县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 111.843801,
            "children": []
          },
          {
            "code": "411326",
            "name": "淅川县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 111.489026,
            "children": []
          },
          {
            "code": "411327",
            "name": "社旗县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.938279,
            "children": []
          },
          {
            "code": "411328",
            "name": "唐河县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.838492,
            "children": []
          },
          {
            "code": "411329",
            "name": "新野县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.365624,
            "children": []
          },
          {
            "code": "411330",
            "name": "桐柏县",
            "level": "district",
            "parentCode": "411300",
            "longitude": 113.406059,
            "children": []
          },
          {
            "code": "411381",
            "name": "邓州市",
            "level": "district",
            "parentCode": "411300",
            "longitude": 112.092716,
            "children": []
          }
        ]
      },
      {
        "code": "411400",
        "name": "商丘市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 115.650497,
        "children": [
          {
            "code": "411402",
            "name": "梁园区",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.65459,
            "children": []
          },
          {
            "code": "411403",
            "name": "睢阳区",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.653813,
            "children": []
          },
          {
            "code": "411421",
            "name": "民权县",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.148146,
            "children": []
          },
          {
            "code": "411422",
            "name": "睢县",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.070109,
            "children": []
          },
          {
            "code": "411423",
            "name": "宁陵县",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.320055,
            "children": []
          },
          {
            "code": "411424",
            "name": "柘城县",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.307433,
            "children": []
          },
          {
            "code": "411425",
            "name": "虞城县",
            "level": "district",
            "parentCode": "411400",
            "longitude": 115.863811,
            "children": []
          },
          {
            "code": "411426",
            "name": "夏邑县",
            "level": "district",
            "parentCode": "411400",
            "longitude": 116.13989,
            "children": []
          },
          {
            "code": "411481",
            "name": "永城市",
            "level": "district",
            "parentCode": "411400",
            "longitude": 116.449672,
            "children": []
          }
        ]
      },
      {
        "code": "411500",
        "name": "信阳市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.075031,
        "children": [
          {
            "code": "411502",
            "name": "浉河区",
            "level": "district",
            "parentCode": "411500",
            "longitude": 114.075031,
            "children": []
          },
          {
            "code": "411503",
            "name": "平桥区",
            "level": "district",
            "parentCode": "411500",
            "longitude": 114.126027,
            "children": []
          },
          {
            "code": "411521",
            "name": "罗山县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 114.533414,
            "children": []
          },
          {
            "code": "411522",
            "name": "光山县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 114.903577,
            "children": []
          },
          {
            "code": "411523",
            "name": "新县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 114.87705,
            "children": []
          },
          {
            "code": "411524",
            "name": "商城县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 115.406297,
            "children": []
          },
          {
            "code": "411525",
            "name": "固始县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 115.667328,
            "children": []
          },
          {
            "code": "411526",
            "name": "潢川县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 115.050123,
            "children": []
          },
          {
            "code": "411527",
            "name": "淮滨县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 115.415451,
            "children": []
          },
          {
            "code": "411528",
            "name": "息县",
            "level": "district",
            "parentCode": "411500",
            "longitude": 114.740713,
            "children": []
          }
        ]
      },
      {
        "code": "411600",
        "name": "周口市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.649653,
        "children": [
          {
            "code": "411602",
            "name": "川汇区",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.652136,
            "children": []
          },
          {
            "code": "411603",
            "name": "淮阳区",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.870166,
            "children": []
          },
          {
            "code": "411621",
            "name": "扶沟县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.392008,
            "children": []
          },
          {
            "code": "411622",
            "name": "西华县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.530067,
            "children": []
          },
          {
            "code": "411623",
            "name": "商水县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.60927,
            "children": []
          },
          {
            "code": "411624",
            "name": "沈丘县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 115.078375,
            "children": []
          },
          {
            "code": "411625",
            "name": "郸城县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 115.189,
            "children": []
          },
          {
            "code": "411627",
            "name": "太康县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.853834,
            "children": []
          },
          {
            "code": "411628",
            "name": "鹿邑县",
            "level": "district",
            "parentCode": "411600",
            "longitude": 115.486386,
            "children": []
          },
          {
            "code": "411681",
            "name": "项城市",
            "level": "district",
            "parentCode": "411600",
            "longitude": 114.899521,
            "children": []
          }
        ]
      },
      {
        "code": "411700",
        "name": "驻马店市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 114.024736,
        "children": [
          {
            "code": "411702",
            "name": "驿城区",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.029149,
            "children": []
          },
          {
            "code": "411721",
            "name": "西平县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.026864,
            "children": []
          },
          {
            "code": "411722",
            "name": "上蔡县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.266892,
            "children": []
          },
          {
            "code": "411723",
            "name": "平舆县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.637105,
            "children": []
          },
          {
            "code": "411724",
            "name": "正阳县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.38948,
            "children": []
          },
          {
            "code": "411725",
            "name": "确山县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.026679,
            "children": []
          },
          {
            "code": "411726",
            "name": "泌阳县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 113.32605,
            "children": []
          },
          {
            "code": "411727",
            "name": "汝南县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.359495,
            "children": []
          },
          {
            "code": "411728",
            "name": "遂平县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.00371,
            "children": []
          },
          {
            "code": "411729",
            "name": "新蔡县",
            "level": "district",
            "parentCode": "411700",
            "longitude": 114.975246,
            "children": []
          }
        ]
      },
      {
        "code": "419001",
        "name": "济源市",
        "level": "city",
        "parentCode": "410000",
        "longitude": 112.590047,
        "children": [
          {
            "code": "419001-self",
            "name": "济源市",
            "level": "district",
            "parentCode": "419001",
            "longitude": 112.590047,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "420000",
    "name": "湖北省",
    "level": "province",
    "longitude": 114.298572,
    "children": [
      {
        "code": "420100",
        "name": "武汉市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 114.298572,
        "children": [
          {
            "code": "420102",
            "name": "江岸区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.30304,
            "children": []
          },
          {
            "code": "420103",
            "name": "江汉区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.283109,
            "children": []
          },
          {
            "code": "420104",
            "name": "硚口区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.264568,
            "children": []
          },
          {
            "code": "420105",
            "name": "汉阳区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.265807,
            "children": []
          },
          {
            "code": "420106",
            "name": "武昌区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.307344,
            "children": []
          },
          {
            "code": "420107",
            "name": "青山区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.39707,
            "children": []
          },
          {
            "code": "420111",
            "name": "洪山区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.400718,
            "children": []
          },
          {
            "code": "420112",
            "name": "东西湖区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.142483,
            "children": []
          },
          {
            "code": "420113",
            "name": "汉南区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.08124,
            "children": []
          },
          {
            "code": "420114",
            "name": "蔡甸区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.029341,
            "children": []
          },
          {
            "code": "420115",
            "name": "江夏区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.313961,
            "children": []
          },
          {
            "code": "420116",
            "name": "黄陂区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.374025,
            "children": []
          },
          {
            "code": "420117",
            "name": "新洲区",
            "level": "district",
            "parentCode": "420100",
            "longitude": 114.802108,
            "children": []
          }
        ]
      },
      {
        "code": "420200",
        "name": "黄石市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 115.077048,
        "children": [
          {
            "code": "420202",
            "name": "黄石港区",
            "level": "district",
            "parentCode": "420200",
            "longitude": 115.090164,
            "children": []
          },
          {
            "code": "420203",
            "name": "西塞山区",
            "level": "district",
            "parentCode": "420200",
            "longitude": 115.093354,
            "children": []
          },
          {
            "code": "420204",
            "name": "下陆区",
            "level": "district",
            "parentCode": "420200",
            "longitude": 114.975755,
            "children": []
          },
          {
            "code": "420205",
            "name": "铁山区",
            "level": "district",
            "parentCode": "420200",
            "longitude": 114.901366,
            "children": []
          },
          {
            "code": "420222",
            "name": "阳新县",
            "level": "district",
            "parentCode": "420200",
            "longitude": 115.212883,
            "children": []
          },
          {
            "code": "420281",
            "name": "大冶市",
            "level": "district",
            "parentCode": "420200",
            "longitude": 114.974842,
            "children": []
          }
        ]
      },
      {
        "code": "420300",
        "name": "十堰市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 110.787916,
        "children": [
          {
            "code": "420302",
            "name": "茅箭区",
            "level": "district",
            "parentCode": "420300",
            "longitude": 110.78621,
            "children": []
          },
          {
            "code": "420303",
            "name": "张湾区",
            "level": "district",
            "parentCode": "420300",
            "longitude": 110.772365,
            "children": []
          },
          {
            "code": "420304",
            "name": "郧阳区",
            "level": "district",
            "parentCode": "420300",
            "longitude": 110.812099,
            "children": []
          },
          {
            "code": "420322",
            "name": "郧西县",
            "level": "district",
            "parentCode": "420300",
            "longitude": 110.426472,
            "children": []
          },
          {
            "code": "420323",
            "name": "竹山县",
            "level": "district",
            "parentCode": "420300",
            "longitude": 110.2296,
            "children": []
          },
          {
            "code": "420324",
            "name": "竹溪县",
            "level": "district",
            "parentCode": "420300",
            "longitude": 109.717196,
            "children": []
          },
          {
            "code": "420325",
            "name": "房县",
            "level": "district",
            "parentCode": "420300",
            "longitude": 110.741966,
            "children": []
          },
          {
            "code": "420381",
            "name": "丹江口市",
            "level": "district",
            "parentCode": "420300",
            "longitude": 111.513793,
            "children": []
          }
        ]
      },
      {
        "code": "420500",
        "name": "宜昌市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 111.290843,
        "children": [
          {
            "code": "420502",
            "name": "西陵区",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.295468,
            "children": []
          },
          {
            "code": "420503",
            "name": "伍家岗区",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.307215,
            "children": []
          },
          {
            "code": "420504",
            "name": "点军区",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.268163,
            "children": []
          },
          {
            "code": "420505",
            "name": "猇亭区",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.427642,
            "children": []
          },
          {
            "code": "420506",
            "name": "夷陵区",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.326747,
            "children": []
          },
          {
            "code": "420525",
            "name": "远安县",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.64331,
            "children": []
          },
          {
            "code": "420526",
            "name": "兴山县",
            "level": "district",
            "parentCode": "420500",
            "longitude": 110.754499,
            "children": []
          },
          {
            "code": "420527",
            "name": "秭归县",
            "level": "district",
            "parentCode": "420500",
            "longitude": 110.976785,
            "children": []
          },
          {
            "code": "420528",
            "name": "长阳土家族自治县",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.198475,
            "children": []
          },
          {
            "code": "420529",
            "name": "五峰土家族自治县",
            "level": "district",
            "parentCode": "420500",
            "longitude": 110.674938,
            "children": []
          },
          {
            "code": "420581",
            "name": "宜都市",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.454367,
            "children": []
          },
          {
            "code": "420582",
            "name": "当阳市",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.793419,
            "children": []
          },
          {
            "code": "420583",
            "name": "枝江市",
            "level": "district",
            "parentCode": "420500",
            "longitude": 111.751799,
            "children": []
          }
        ]
      },
      {
        "code": "420600",
        "name": "襄阳市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 112.144146,
        "children": [
          {
            "code": "420602",
            "name": "襄城区",
            "level": "district",
            "parentCode": "420600",
            "longitude": 112.150327,
            "children": []
          },
          {
            "code": "420606",
            "name": "樊城区",
            "level": "district",
            "parentCode": "420600",
            "longitude": 112.13957,
            "children": []
          },
          {
            "code": "420607",
            "name": "襄州区",
            "level": "district",
            "parentCode": "420600",
            "longitude": 112.197378,
            "children": []
          },
          {
            "code": "420624",
            "name": "南漳县",
            "level": "district",
            "parentCode": "420600",
            "longitude": 111.844424,
            "children": []
          },
          {
            "code": "420625",
            "name": "谷城县",
            "level": "district",
            "parentCode": "420600",
            "longitude": 111.640147,
            "children": []
          },
          {
            "code": "420626",
            "name": "保康县",
            "level": "district",
            "parentCode": "420600",
            "longitude": 111.262235,
            "children": []
          },
          {
            "code": "420682",
            "name": "老河口市",
            "level": "district",
            "parentCode": "420600",
            "longitude": 111.675732,
            "children": []
          },
          {
            "code": "420683",
            "name": "枣阳市",
            "level": "district",
            "parentCode": "420600",
            "longitude": 112.765268,
            "children": []
          },
          {
            "code": "420684",
            "name": "宜城市",
            "level": "district",
            "parentCode": "420600",
            "longitude": 112.261441,
            "children": []
          }
        ]
      },
      {
        "code": "420700",
        "name": "鄂州市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 114.890593,
        "children": [
          {
            "code": "420702",
            "name": "梁子湖区",
            "level": "district",
            "parentCode": "420700",
            "longitude": 114.681967,
            "children": []
          },
          {
            "code": "420703",
            "name": "华容区",
            "level": "district",
            "parentCode": "420700",
            "longitude": 114.74148,
            "children": []
          },
          {
            "code": "420704",
            "name": "鄂城区",
            "level": "district",
            "parentCode": "420700",
            "longitude": 114.890012,
            "children": []
          }
        ]
      },
      {
        "code": "420800",
        "name": "荆门市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 112.204251,
        "children": [
          {
            "code": "420802",
            "name": "东宝区",
            "level": "district",
            "parentCode": "420800",
            "longitude": 112.204804,
            "children": []
          },
          {
            "code": "420804",
            "name": "掇刀区",
            "level": "district",
            "parentCode": "420800",
            "longitude": 112.198413,
            "children": []
          },
          {
            "code": "420822",
            "name": "沙洋县",
            "level": "district",
            "parentCode": "420800",
            "longitude": 112.595218,
            "children": []
          },
          {
            "code": "420881",
            "name": "钟祥市",
            "level": "district",
            "parentCode": "420800",
            "longitude": 112.587267,
            "children": []
          },
          {
            "code": "420882",
            "name": "京山市",
            "level": "district",
            "parentCode": "420800",
            "longitude": 113.114595,
            "children": []
          }
        ]
      },
      {
        "code": "420900",
        "name": "孝感市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 113.926655,
        "children": [
          {
            "code": "420902",
            "name": "孝南区",
            "level": "district",
            "parentCode": "420900",
            "longitude": 113.925849,
            "children": []
          },
          {
            "code": "420921",
            "name": "孝昌县",
            "level": "district",
            "parentCode": "420900",
            "longitude": 113.988964,
            "children": []
          },
          {
            "code": "420922",
            "name": "大悟县",
            "level": "district",
            "parentCode": "420900",
            "longitude": 114.126249,
            "children": []
          },
          {
            "code": "420923",
            "name": "云梦县",
            "level": "district",
            "parentCode": "420900",
            "longitude": 113.750616,
            "children": []
          },
          {
            "code": "420981",
            "name": "应城市",
            "level": "district",
            "parentCode": "420900",
            "longitude": 113.573842,
            "children": []
          },
          {
            "code": "420982",
            "name": "安陆市",
            "level": "district",
            "parentCode": "420900",
            "longitude": 113.690401,
            "children": []
          },
          {
            "code": "420984",
            "name": "汉川市",
            "level": "district",
            "parentCode": "420900",
            "longitude": 113.835301,
            "children": []
          }
        ]
      },
      {
        "code": "421000",
        "name": "荆州市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 112.23813,
        "children": [
          {
            "code": "421002",
            "name": "沙市区",
            "level": "district",
            "parentCode": "421000",
            "longitude": 112.257433,
            "children": []
          },
          {
            "code": "421003",
            "name": "荆州区",
            "level": "district",
            "parentCode": "421000",
            "longitude": 112.195354,
            "children": []
          },
          {
            "code": "421022",
            "name": "公安县",
            "level": "district",
            "parentCode": "421000",
            "longitude": 112.230179,
            "children": []
          },
          {
            "code": "421023",
            "name": "监利市",
            "level": "district",
            "parentCode": "421000",
            "longitude": 112.904344,
            "children": []
          },
          {
            "code": "421024",
            "name": "江陵县",
            "level": "district",
            "parentCode": "421000",
            "longitude": 112.41735,
            "children": []
          },
          {
            "code": "421081",
            "name": "石首市",
            "level": "district",
            "parentCode": "421000",
            "longitude": 112.40887,
            "children": []
          },
          {
            "code": "421083",
            "name": "洪湖市",
            "level": "district",
            "parentCode": "421000",
            "longitude": 113.470304,
            "children": []
          },
          {
            "code": "421087",
            "name": "松滋市",
            "level": "district",
            "parentCode": "421000",
            "longitude": 111.77818,
            "children": []
          }
        ]
      },
      {
        "code": "421100",
        "name": "黄冈市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 114.879365,
        "children": [
          {
            "code": "421102",
            "name": "黄州区",
            "level": "district",
            "parentCode": "421100",
            "longitude": 114.878934,
            "children": []
          },
          {
            "code": "421121",
            "name": "团风县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 114.872029,
            "children": []
          },
          {
            "code": "421122",
            "name": "红安县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 114.615095,
            "children": []
          },
          {
            "code": "421123",
            "name": "罗田县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.398984,
            "children": []
          },
          {
            "code": "421124",
            "name": "英山县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.67753,
            "children": []
          },
          {
            "code": "421125",
            "name": "浠水县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.26344,
            "children": []
          },
          {
            "code": "421126",
            "name": "蕲春县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.433964,
            "children": []
          },
          {
            "code": "421127",
            "name": "黄梅县",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.942548,
            "children": []
          },
          {
            "code": "421181",
            "name": "麻城市",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.02541,
            "children": []
          },
          {
            "code": "421182",
            "name": "武穴市",
            "level": "district",
            "parentCode": "421100",
            "longitude": 115.56242,
            "children": []
          }
        ]
      },
      {
        "code": "421200",
        "name": "咸宁市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 114.328963,
        "children": [
          {
            "code": "421202",
            "name": "咸安区",
            "level": "district",
            "parentCode": "421200",
            "longitude": 114.333894,
            "children": []
          },
          {
            "code": "421221",
            "name": "嘉鱼县",
            "level": "district",
            "parentCode": "421200",
            "longitude": 113.921547,
            "children": []
          },
          {
            "code": "421222",
            "name": "通城县",
            "level": "district",
            "parentCode": "421200",
            "longitude": 113.814131,
            "children": []
          },
          {
            "code": "421223",
            "name": "崇阳县",
            "level": "district",
            "parentCode": "421200",
            "longitude": 114.049958,
            "children": []
          },
          {
            "code": "421224",
            "name": "通山县",
            "level": "district",
            "parentCode": "421200",
            "longitude": 114.493163,
            "children": []
          },
          {
            "code": "421281",
            "name": "赤壁市",
            "level": "district",
            "parentCode": "421200",
            "longitude": 113.88366,
            "children": []
          }
        ]
      },
      {
        "code": "421300",
        "name": "随州市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 113.37377,
        "children": [
          {
            "code": "421303",
            "name": "曾都区",
            "level": "district",
            "parentCode": "421300",
            "longitude": 113.374519,
            "children": []
          },
          {
            "code": "421321",
            "name": "随县",
            "level": "district",
            "parentCode": "421300",
            "longitude": 113.301384,
            "children": []
          },
          {
            "code": "421381",
            "name": "广水市",
            "level": "district",
            "parentCode": "421300",
            "longitude": 113.826601,
            "children": []
          }
        ]
      },
      {
        "code": "422800",
        "name": "恩施土家族苗族自治州",
        "level": "city",
        "parentCode": "420000",
        "longitude": 109.48699,
        "children": [
          {
            "code": "422801",
            "name": "恩施市",
            "level": "district",
            "parentCode": "422800",
            "longitude": 109.486761,
            "children": []
          },
          {
            "code": "422802",
            "name": "利川市",
            "level": "district",
            "parentCode": "422800",
            "longitude": 108.943491,
            "children": []
          },
          {
            "code": "422822",
            "name": "建始县",
            "level": "district",
            "parentCode": "422800",
            "longitude": 109.723822,
            "children": []
          },
          {
            "code": "422823",
            "name": "巴东县",
            "level": "district",
            "parentCode": "422800",
            "longitude": 110.336665,
            "children": []
          },
          {
            "code": "422825",
            "name": "宣恩县",
            "level": "district",
            "parentCode": "422800",
            "longitude": 109.482819,
            "children": []
          },
          {
            "code": "422826",
            "name": "咸丰县",
            "level": "district",
            "parentCode": "422800",
            "longitude": 109.15041,
            "children": []
          },
          {
            "code": "422827",
            "name": "来凤县",
            "level": "district",
            "parentCode": "422800",
            "longitude": 109.408328,
            "children": []
          },
          {
            "code": "422828",
            "name": "鹤峰县",
            "level": "district",
            "parentCode": "422800",
            "longitude": 110.033699,
            "children": []
          }
        ]
      },
      {
        "code": "429004",
        "name": "仙桃市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 113.453974,
        "children": [
          {
            "code": "429004-self",
            "name": "仙桃市",
            "level": "district",
            "parentCode": "429004",
            "longitude": 113.453974,
            "children": []
          }
        ]
      },
      {
        "code": "429005",
        "name": "潜江市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 112.896866,
        "children": [
          {
            "code": "429005-self",
            "name": "潜江市",
            "level": "district",
            "parentCode": "429005",
            "longitude": 112.896866,
            "children": []
          }
        ]
      },
      {
        "code": "429006",
        "name": "天门市",
        "level": "city",
        "parentCode": "420000",
        "longitude": 113.165862,
        "children": [
          {
            "code": "429006-self",
            "name": "天门市",
            "level": "district",
            "parentCode": "429006",
            "longitude": 113.165862,
            "children": []
          }
        ]
      },
      {
        "code": "429021",
        "name": "神农架林区",
        "level": "city",
        "parentCode": "420000",
        "longitude": 110.671525,
        "children": [
          {
            "code": "429021-self",
            "name": "神农架林区",
            "level": "district",
            "parentCode": "429021",
            "longitude": 110.671525,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "430000",
    "name": "湖南省",
    "level": "province",
    "longitude": 112.982279,
    "children": [
      {
        "code": "430100",
        "name": "长沙市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 112.982279,
        "children": [
          {
            "code": "430102",
            "name": "芙蓉区",
            "level": "district",
            "parentCode": "430100",
            "longitude": 112.988094,
            "children": []
          },
          {
            "code": "430103",
            "name": "天心区",
            "level": "district",
            "parentCode": "430100",
            "longitude": 112.97307,
            "children": []
          },
          {
            "code": "430104",
            "name": "岳麓区",
            "level": "district",
            "parentCode": "430100",
            "longitude": 112.911591,
            "children": []
          },
          {
            "code": "430105",
            "name": "开福区",
            "level": "district",
            "parentCode": "430100",
            "longitude": 112.985525,
            "children": []
          },
          {
            "code": "430111",
            "name": "雨花区",
            "level": "district",
            "parentCode": "430100",
            "longitude": 113.016337,
            "children": []
          },
          {
            "code": "430112",
            "name": "望城区",
            "level": "district",
            "parentCode": "430100",
            "longitude": 112.819549,
            "children": []
          },
          {
            "code": "430121",
            "name": "长沙县",
            "level": "district",
            "parentCode": "430100",
            "longitude": 113.080098,
            "children": []
          },
          {
            "code": "430181",
            "name": "浏阳市",
            "level": "district",
            "parentCode": "430100",
            "longitude": 113.633301,
            "children": []
          },
          {
            "code": "430182",
            "name": "宁乡市",
            "level": "district",
            "parentCode": "430100",
            "longitude": 112.553182,
            "children": []
          }
        ]
      },
      {
        "code": "430200",
        "name": "株洲市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 113.151737,
        "children": [
          {
            "code": "430202",
            "name": "荷塘区",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.162548,
            "children": []
          },
          {
            "code": "430203",
            "name": "芦淞区",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.155169,
            "children": []
          },
          {
            "code": "430204",
            "name": "石峰区",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.11295,
            "children": []
          },
          {
            "code": "430211",
            "name": "天元区",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.136252,
            "children": []
          },
          {
            "code": "430212",
            "name": "渌口区",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.146175,
            "children": []
          },
          {
            "code": "430223",
            "name": "攸县",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.345774,
            "children": []
          },
          {
            "code": "430224",
            "name": "茶陵县",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.546509,
            "children": []
          },
          {
            "code": "430225",
            "name": "炎陵县",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.776884,
            "children": []
          },
          {
            "code": "430281",
            "name": "醴陵市",
            "level": "district",
            "parentCode": "430200",
            "longitude": 113.507157,
            "children": []
          }
        ]
      },
      {
        "code": "430300",
        "name": "湘潭市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 112.944052,
        "children": [
          {
            "code": "430302",
            "name": "雨湖区",
            "level": "district",
            "parentCode": "430300",
            "longitude": 112.907427,
            "children": []
          },
          {
            "code": "430304",
            "name": "岳塘区",
            "level": "district",
            "parentCode": "430300",
            "longitude": 112.927707,
            "children": []
          },
          {
            "code": "430321",
            "name": "湘潭县",
            "level": "district",
            "parentCode": "430300",
            "longitude": 112.952829,
            "children": []
          },
          {
            "code": "430381",
            "name": "湘乡市",
            "level": "district",
            "parentCode": "430300",
            "longitude": 112.525217,
            "children": []
          },
          {
            "code": "430382",
            "name": "韶山市",
            "level": "district",
            "parentCode": "430300",
            "longitude": 112.52848,
            "children": []
          }
        ]
      },
      {
        "code": "430400",
        "name": "衡阳市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 112.607693,
        "children": [
          {
            "code": "430405",
            "name": "珠晖区",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.626324,
            "children": []
          },
          {
            "code": "430406",
            "name": "雁峰区",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.612241,
            "children": []
          },
          {
            "code": "430407",
            "name": "石鼓区",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.607635,
            "children": []
          },
          {
            "code": "430408",
            "name": "蒸湘区",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.570608,
            "children": []
          },
          {
            "code": "430412",
            "name": "南岳区",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.734147,
            "children": []
          },
          {
            "code": "430421",
            "name": "衡阳县",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.379643,
            "children": []
          },
          {
            "code": "430422",
            "name": "衡南县",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.677459,
            "children": []
          },
          {
            "code": "430423",
            "name": "衡山县",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.86971,
            "children": []
          },
          {
            "code": "430424",
            "name": "衡东县",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.950412,
            "children": []
          },
          {
            "code": "430426",
            "name": "祁东县",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.111192,
            "children": []
          },
          {
            "code": "430481",
            "name": "耒阳市",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.847215,
            "children": []
          },
          {
            "code": "430482",
            "name": "常宁市",
            "level": "district",
            "parentCode": "430400",
            "longitude": 112.396821,
            "children": []
          }
        ]
      },
      {
        "code": "430500",
        "name": "邵阳市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 111.46923,
        "children": [
          {
            "code": "430502",
            "name": "双清区",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.479756,
            "children": []
          },
          {
            "code": "430503",
            "name": "大祥区",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.462968,
            "children": []
          },
          {
            "code": "430511",
            "name": "北塔区",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.452315,
            "children": []
          },
          {
            "code": "430522",
            "name": "新邵县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.459762,
            "children": []
          },
          {
            "code": "430523",
            "name": "邵阳县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.2757,
            "children": []
          },
          {
            "code": "430524",
            "name": "隆回县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.038785,
            "children": []
          },
          {
            "code": "430525",
            "name": "洞口县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 110.579212,
            "children": []
          },
          {
            "code": "430527",
            "name": "绥宁县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 110.155075,
            "children": []
          },
          {
            "code": "430528",
            "name": "新宁县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 110.859115,
            "children": []
          },
          {
            "code": "430529",
            "name": "城步苗族自治县",
            "level": "district",
            "parentCode": "430500",
            "longitude": 110.313226,
            "children": []
          },
          {
            "code": "430581",
            "name": "武冈市",
            "level": "district",
            "parentCode": "430500",
            "longitude": 110.636804,
            "children": []
          },
          {
            "code": "430582",
            "name": "邵东市",
            "level": "district",
            "parentCode": "430500",
            "longitude": 111.743168,
            "children": []
          }
        ]
      },
      {
        "code": "430600",
        "name": "岳阳市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 113.132855,
        "children": [
          {
            "code": "430602",
            "name": "岳阳楼区",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.120751,
            "children": []
          },
          {
            "code": "430603",
            "name": "云溪区",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.27387,
            "children": []
          },
          {
            "code": "430611",
            "name": "君山区",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.004082,
            "children": []
          },
          {
            "code": "430621",
            "name": "岳阳县",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.116073,
            "children": []
          },
          {
            "code": "430623",
            "name": "华容县",
            "level": "district",
            "parentCode": "430600",
            "longitude": 112.559369,
            "children": []
          },
          {
            "code": "430624",
            "name": "湘阴县",
            "level": "district",
            "parentCode": "430600",
            "longitude": 112.889748,
            "children": []
          },
          {
            "code": "430626",
            "name": "平江县",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.593751,
            "children": []
          },
          {
            "code": "430681",
            "name": "汨罗市",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.079419,
            "children": []
          },
          {
            "code": "430682",
            "name": "临湘市",
            "level": "district",
            "parentCode": "430600",
            "longitude": 113.450809,
            "children": []
          }
        ]
      },
      {
        "code": "430700",
        "name": "常德市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 111.691347,
        "children": [
          {
            "code": "430702",
            "name": "武陵区",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.690718,
            "children": []
          },
          {
            "code": "430703",
            "name": "鼎城区",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.685327,
            "children": []
          },
          {
            "code": "430721",
            "name": "安乡县",
            "level": "district",
            "parentCode": "430700",
            "longitude": 112.172289,
            "children": []
          },
          {
            "code": "430722",
            "name": "汉寿县",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.968506,
            "children": []
          },
          {
            "code": "430723",
            "name": "澧县",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.761682,
            "children": []
          },
          {
            "code": "430724",
            "name": "临澧县",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.645602,
            "children": []
          },
          {
            "code": "430725",
            "name": "桃源县",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.484503,
            "children": []
          },
          {
            "code": "430726",
            "name": "石门县",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.379087,
            "children": []
          },
          {
            "code": "430781",
            "name": "津市市",
            "level": "district",
            "parentCode": "430700",
            "longitude": 111.879609,
            "children": []
          }
        ]
      },
      {
        "code": "430800",
        "name": "张家界市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 110.479921,
        "children": [
          {
            "code": "430802",
            "name": "永定区",
            "level": "district",
            "parentCode": "430800",
            "longitude": 110.484559,
            "children": []
          },
          {
            "code": "430811",
            "name": "武陵源区",
            "level": "district",
            "parentCode": "430800",
            "longitude": 110.54758,
            "children": []
          },
          {
            "code": "430821",
            "name": "慈利县",
            "level": "district",
            "parentCode": "430800",
            "longitude": 111.132702,
            "children": []
          },
          {
            "code": "430822",
            "name": "桑植县",
            "level": "district",
            "parentCode": "430800",
            "longitude": 110.164039,
            "children": []
          }
        ]
      },
      {
        "code": "430900",
        "name": "益阳市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 112.355042,
        "children": [
          {
            "code": "430902",
            "name": "资阳区",
            "level": "district",
            "parentCode": "430900",
            "longitude": 112.33084,
            "children": []
          },
          {
            "code": "430903",
            "name": "赫山区",
            "level": "district",
            "parentCode": "430900",
            "longitude": 112.360946,
            "children": []
          },
          {
            "code": "430921",
            "name": "南县",
            "level": "district",
            "parentCode": "430900",
            "longitude": 112.410399,
            "children": []
          },
          {
            "code": "430922",
            "name": "桃江县",
            "level": "district",
            "parentCode": "430900",
            "longitude": 112.139732,
            "children": []
          },
          {
            "code": "430923",
            "name": "安化县",
            "level": "district",
            "parentCode": "430900",
            "longitude": 111.221824,
            "children": []
          },
          {
            "code": "430981",
            "name": "��江市",
            "level": "district",
            "parentCode": "430900",
            "longitude": 112.361088,
            "children": []
          }
        ]
      },
      {
        "code": "431000",
        "name": "郴州市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 113.032067,
        "children": [
          {
            "code": "431002",
            "name": "北湖区",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.032208,
            "children": []
          },
          {
            "code": "431003",
            "name": "苏仙区",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.038698,
            "children": []
          },
          {
            "code": "431021",
            "name": "桂阳县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 112.734466,
            "children": []
          },
          {
            "code": "431022",
            "name": "宜章县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 112.947884,
            "children": []
          },
          {
            "code": "431023",
            "name": "永兴县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.114819,
            "children": []
          },
          {
            "code": "431024",
            "name": "嘉禾县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 112.370618,
            "children": []
          },
          {
            "code": "431025",
            "name": "临武县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 112.564589,
            "children": []
          },
          {
            "code": "431026",
            "name": "汝城县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.685686,
            "children": []
          },
          {
            "code": "431027",
            "name": "桂东县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.945879,
            "children": []
          },
          {
            "code": "431028",
            "name": "安仁县",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.27217,
            "children": []
          },
          {
            "code": "431081",
            "name": "资兴市",
            "level": "district",
            "parentCode": "431000",
            "longitude": 113.23682,
            "children": []
          }
        ]
      },
      {
        "code": "431100",
        "name": "永州市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 111.608019,
        "children": [
          {
            "code": "431102",
            "name": "零陵区",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.626348,
            "children": []
          },
          {
            "code": "431103",
            "name": "冷水滩区",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.607156,
            "children": []
          },
          {
            "code": "431121",
            "name": "祁阳市",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.85734,
            "children": []
          },
          {
            "code": "431122",
            "name": "东安县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.313035,
            "children": []
          },
          {
            "code": "431123",
            "name": "双牌县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.662146,
            "children": []
          },
          {
            "code": "431124",
            "name": "道县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.591614,
            "children": []
          },
          {
            "code": "431125",
            "name": "江永县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.346803,
            "children": []
          },
          {
            "code": "431126",
            "name": "宁远县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.944529,
            "children": []
          },
          {
            "code": "431127",
            "name": "蓝山县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 112.194195,
            "children": []
          },
          {
            "code": "431128",
            "name": "新田县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 112.220341,
            "children": []
          },
          {
            "code": "431129",
            "name": "江华瑶族自治县",
            "level": "district",
            "parentCode": "431100",
            "longitude": 111.577276,
            "children": []
          }
        ]
      },
      {
        "code": "431200",
        "name": "怀化市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 109.97824,
        "children": [
          {
            "code": "431202",
            "name": "鹤城区",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.982242,
            "children": []
          },
          {
            "code": "431221",
            "name": "中方县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.948061,
            "children": []
          },
          {
            "code": "431222",
            "name": "沅陵县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 110.399161,
            "children": []
          },
          {
            "code": "431223",
            "name": "辰溪县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 110.196953,
            "children": []
          },
          {
            "code": "431224",
            "name": "溆浦县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 110.593373,
            "children": []
          },
          {
            "code": "431225",
            "name": "会同县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.720785,
            "children": []
          },
          {
            "code": "431226",
            "name": "麻阳苗族自治县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.802807,
            "children": []
          },
          {
            "code": "431227",
            "name": "新晃侗族自治县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.174443,
            "children": []
          },
          {
            "code": "431228",
            "name": "芷江侗族自治县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.687777,
            "children": []
          },
          {
            "code": "431229",
            "name": "靖州苗族侗族自治县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.691159,
            "children": []
          },
          {
            "code": "431230",
            "name": "通道侗族自治县",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.783359,
            "children": []
          },
          {
            "code": "431281",
            "name": "洪江市",
            "level": "district",
            "parentCode": "431200",
            "longitude": 109.831765,
            "children": []
          }
        ]
      },
      {
        "code": "431300",
        "name": "娄底市",
        "level": "city",
        "parentCode": "430000",
        "longitude": 112.008497,
        "children": [
          {
            "code": "431302",
            "name": "娄星区",
            "level": "district",
            "parentCode": "431300",
            "longitude": 112.008486,
            "children": []
          },
          {
            "code": "431321",
            "name": "双峰县",
            "level": "district",
            "parentCode": "431300",
            "longitude": 112.198245,
            "children": []
          },
          {
            "code": "431322",
            "name": "新化县",
            "level": "district",
            "parentCode": "431300",
            "longitude": 111.306747,
            "children": []
          },
          {
            "code": "431381",
            "name": "冷水江市",
            "level": "district",
            "parentCode": "431300",
            "longitude": 111.434674,
            "children": []
          },
          {
            "code": "431382",
            "name": "涟源市",
            "level": "district",
            "parentCode": "431300",
            "longitude": 111.670847,
            "children": []
          }
        ]
      },
      {
        "code": "433100",
        "name": "湘西土家族苗族自治州",
        "level": "city",
        "parentCode": "430000",
        "longitude": 109.739735,
        "children": [
          {
            "code": "433101",
            "name": "吉首市",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.738273,
            "children": []
          },
          {
            "code": "433122",
            "name": "泸溪县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 110.214428,
            "children": []
          },
          {
            "code": "433123",
            "name": "凤凰县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.599191,
            "children": []
          },
          {
            "code": "433124",
            "name": "花垣县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.479063,
            "children": []
          },
          {
            "code": "433125",
            "name": "保靖县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.651445,
            "children": []
          },
          {
            "code": "433126",
            "name": "古丈县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.949592,
            "children": []
          },
          {
            "code": "433127",
            "name": "永顺县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.853292,
            "children": []
          },
          {
            "code": "433130",
            "name": "龙山县",
            "level": "district",
            "parentCode": "433100",
            "longitude": 109.441189,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "440000",
    "name": "广东省",
    "level": "province",
    "longitude": 113.280637,
    "children": [
      {
        "code": "440100",
        "name": "广州市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.280637,
        "children": [
          {
            "code": "440103",
            "name": "荔湾区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.243038,
            "children": []
          },
          {
            "code": "440104",
            "name": "越秀区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.280714,
            "children": []
          },
          {
            "code": "440105",
            "name": "海珠区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.262008,
            "children": []
          },
          {
            "code": "440106",
            "name": "天河区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.335367,
            "children": []
          },
          {
            "code": "440111",
            "name": "白云区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.262831,
            "children": []
          },
          {
            "code": "440112",
            "name": "黄埔区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.450761,
            "children": []
          },
          {
            "code": "440113",
            "name": "番禺区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.364619,
            "children": []
          },
          {
            "code": "440114",
            "name": "花都区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.211184,
            "children": []
          },
          {
            "code": "440115",
            "name": "南沙区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.53738,
            "children": []
          },
          {
            "code": "440117",
            "name": "从化区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.587386,
            "children": []
          },
          {
            "code": "440118",
            "name": "增城区",
            "level": "district",
            "parentCode": "440100",
            "longitude": 113.829579,
            "children": []
          }
        ]
      },
      {
        "code": "440200",
        "name": "韶关市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.591544,
        "children": [
          {
            "code": "440203",
            "name": "武江区",
            "level": "district",
            "parentCode": "440200",
            "longitude": 113.588289,
            "children": []
          },
          {
            "code": "440204",
            "name": "浈江区",
            "level": "district",
            "parentCode": "440200",
            "longitude": 113.599224,
            "children": []
          },
          {
            "code": "440205",
            "name": "曲江区",
            "level": "district",
            "parentCode": "440200",
            "longitude": 113.605582,
            "children": []
          },
          {
            "code": "440222",
            "name": "始兴县",
            "level": "district",
            "parentCode": "440200",
            "longitude": 114.067205,
            "children": []
          },
          {
            "code": "440224",
            "name": "仁化县",
            "level": "district",
            "parentCode": "440200",
            "longitude": 113.748627,
            "children": []
          },
          {
            "code": "440229",
            "name": "翁源县",
            "level": "district",
            "parentCode": "440200",
            "longitude": 114.131289,
            "children": []
          },
          {
            "code": "440232",
            "name": "乳源瑶族自治县",
            "level": "district",
            "parentCode": "440200",
            "longitude": 113.278417,
            "children": []
          },
          {
            "code": "440233",
            "name": "新丰县",
            "level": "district",
            "parentCode": "440200",
            "longitude": 114.207034,
            "children": []
          },
          {
            "code": "440281",
            "name": "乐昌市",
            "level": "district",
            "parentCode": "440200",
            "longitude": 113.352413,
            "children": []
          },
          {
            "code": "440282",
            "name": "南雄市",
            "level": "district",
            "parentCode": "440200",
            "longitude": 114.311231,
            "children": []
          }
        ]
      },
      {
        "code": "440300",
        "name": "深圳市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 114.085947,
        "children": [
          {
            "code": "440303",
            "name": "罗湖区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 114.123885,
            "children": []
          },
          {
            "code": "440304",
            "name": "福田区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 114.05096,
            "children": []
          },
          {
            "code": "440305",
            "name": "南山区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 113.92943,
            "children": []
          },
          {
            "code": "440306",
            "name": "宝安区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 113.828671,
            "children": []
          },
          {
            "code": "440307",
            "name": "龙岗区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 114.251372,
            "children": []
          },
          {
            "code": "440308",
            "name": "盐田区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 114.235366,
            "children": []
          },
          {
            "code": "440309",
            "name": "龙华区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 114.044346,
            "children": []
          },
          {
            "code": "440310",
            "name": "坪山区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 114.338441,
            "children": []
          },
          {
            "code": "440311",
            "name": "光明区",
            "level": "district",
            "parentCode": "440300",
            "longitude": 113.935895,
            "children": []
          }
        ]
      },
      {
        "code": "440400",
        "name": "珠海市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.553986,
        "children": [
          {
            "code": "440402",
            "name": "香洲区",
            "level": "district",
            "parentCode": "440400",
            "longitude": 113.55027,
            "children": []
          },
          {
            "code": "440403",
            "name": "斗门区",
            "level": "district",
            "parentCode": "440400",
            "longitude": 113.297739,
            "children": []
          },
          {
            "code": "440404",
            "name": "金湾区",
            "level": "district",
            "parentCode": "440400",
            "longitude": 113.345071,
            "children": []
          }
        ]
      },
      {
        "code": "440500",
        "name": "汕头市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 116.708463,
        "children": [
          {
            "code": "440507",
            "name": "龙湖区",
            "level": "district",
            "parentCode": "440500",
            "longitude": 116.732015,
            "children": []
          },
          {
            "code": "440511",
            "name": "金平区",
            "level": "district",
            "parentCode": "440500",
            "longitude": 116.703583,
            "children": []
          },
          {
            "code": "440512",
            "name": "濠江区",
            "level": "district",
            "parentCode": "440500",
            "longitude": 116.729528,
            "children": []
          },
          {
            "code": "440513",
            "name": "潮阳区",
            "level": "district",
            "parentCode": "440500",
            "longitude": 116.602602,
            "children": []
          },
          {
            "code": "440514",
            "name": "潮南区",
            "level": "district",
            "parentCode": "440500",
            "longitude": 116.423607,
            "children": []
          },
          {
            "code": "440515",
            "name": "澄海区",
            "level": "district",
            "parentCode": "440500",
            "longitude": 116.76336,
            "children": []
          },
          {
            "code": "440523",
            "name": "南澳县",
            "level": "district",
            "parentCode": "440500",
            "longitude": 117.027105,
            "children": []
          }
        ]
      },
      {
        "code": "440600",
        "name": "佛山市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.122717,
        "children": [
          {
            "code": "440604",
            "name": "禅城区",
            "level": "district",
            "parentCode": "440600",
            "longitude": 113.112414,
            "children": []
          },
          {
            "code": "440605",
            "name": "南海区",
            "level": "district",
            "parentCode": "440600",
            "longitude": 113.145577,
            "children": []
          },
          {
            "code": "440606",
            "name": "顺德区",
            "level": "district",
            "parentCode": "440600",
            "longitude": 113.281826,
            "children": []
          },
          {
            "code": "440607",
            "name": "三水区",
            "level": "district",
            "parentCode": "440600",
            "longitude": 112.899414,
            "children": []
          },
          {
            "code": "440608",
            "name": "高明区",
            "level": "district",
            "parentCode": "440600",
            "longitude": 112.882123,
            "children": []
          }
        ]
      },
      {
        "code": "440700",
        "name": "江门市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.094942,
        "children": [
          {
            "code": "440703",
            "name": "蓬江区",
            "level": "district",
            "parentCode": "440700",
            "longitude": 113.07859,
            "children": []
          },
          {
            "code": "440704",
            "name": "江海区",
            "level": "district",
            "parentCode": "440700",
            "longitude": 113.120601,
            "children": []
          },
          {
            "code": "440705",
            "name": "新会区",
            "level": "district",
            "parentCode": "440700",
            "longitude": 113.038584,
            "children": []
          },
          {
            "code": "440781",
            "name": "台山市",
            "level": "district",
            "parentCode": "440700",
            "longitude": 112.793414,
            "children": []
          },
          {
            "code": "440783",
            "name": "开平市",
            "level": "district",
            "parentCode": "440700",
            "longitude": 112.692262,
            "children": []
          },
          {
            "code": "440784",
            "name": "鹤山市",
            "level": "district",
            "parentCode": "440700",
            "longitude": 112.961795,
            "children": []
          },
          {
            "code": "440785",
            "name": "恩平市",
            "level": "district",
            "parentCode": "440700",
            "longitude": 112.314051,
            "children": []
          }
        ]
      },
      {
        "code": "440800",
        "name": "湛江市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 110.364977,
        "children": [
          {
            "code": "440802",
            "name": "赤坎区",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.361634,
            "children": []
          },
          {
            "code": "440803",
            "name": "霞山区",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.406382,
            "children": []
          },
          {
            "code": "440804",
            "name": "坡头区",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.455632,
            "children": []
          },
          {
            "code": "440811",
            "name": "麻章区",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.329167,
            "children": []
          },
          {
            "code": "440823",
            "name": "遂溪县",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.255321,
            "children": []
          },
          {
            "code": "440825",
            "name": "徐闻县",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.175718,
            "children": []
          },
          {
            "code": "440881",
            "name": "廉江市",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.284961,
            "children": []
          },
          {
            "code": "440882",
            "name": "雷州市",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.088275,
            "children": []
          },
          {
            "code": "440883",
            "name": "吴川市",
            "level": "district",
            "parentCode": "440800",
            "longitude": 110.780508,
            "children": []
          }
        ]
      },
      {
        "code": "440900",
        "name": "茂名市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 110.919229,
        "children": [
          {
            "code": "440902",
            "name": "茂南区",
            "level": "district",
            "parentCode": "440900",
            "longitude": 110.920542,
            "children": []
          },
          {
            "code": "440904",
            "name": "电白区",
            "level": "district",
            "parentCode": "440900",
            "longitude": 111.007264,
            "children": []
          },
          {
            "code": "440981",
            "name": "高州市",
            "level": "district",
            "parentCode": "440900",
            "longitude": 110.853251,
            "children": []
          },
          {
            "code": "440982",
            "name": "化州市",
            "level": "district",
            "parentCode": "440900",
            "longitude": 110.63839,
            "children": []
          },
          {
            "code": "440983",
            "name": "信宜市",
            "level": "district",
            "parentCode": "440900",
            "longitude": 110.941656,
            "children": []
          }
        ]
      },
      {
        "code": "441200",
        "name": "肇庆市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 112.472529,
        "children": [
          {
            "code": "441202",
            "name": "端州区",
            "level": "district",
            "parentCode": "441200",
            "longitude": 112.472329,
            "children": []
          },
          {
            "code": "441203",
            "name": "鼎湖区",
            "level": "district",
            "parentCode": "441200",
            "longitude": 112.565249,
            "children": []
          },
          {
            "code": "441204",
            "name": "高要区",
            "level": "district",
            "parentCode": "441200",
            "longitude": 112.460846,
            "children": []
          },
          {
            "code": "441223",
            "name": "广宁县",
            "level": "district",
            "parentCode": "441200",
            "longitude": 112.440419,
            "children": []
          },
          {
            "code": "441224",
            "name": "怀集县",
            "level": "district",
            "parentCode": "441200",
            "longitude": 112.182466,
            "children": []
          },
          {
            "code": "441225",
            "name": "封开县",
            "level": "district",
            "parentCode": "441200",
            "longitude": 111.502973,
            "children": []
          },
          {
            "code": "441226",
            "name": "德庆县",
            "level": "district",
            "parentCode": "441200",
            "longitude": 111.78156,
            "children": []
          },
          {
            "code": "441284",
            "name": "四会市",
            "level": "district",
            "parentCode": "441200",
            "longitude": 112.695028,
            "children": []
          }
        ]
      },
      {
        "code": "441300",
        "name": "惠州市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 114.412599,
        "children": [
          {
            "code": "441302",
            "name": "惠城区",
            "level": "district",
            "parentCode": "441300",
            "longitude": 114.413978,
            "children": []
          },
          {
            "code": "441303",
            "name": "惠阳区",
            "level": "district",
            "parentCode": "441300",
            "longitude": 114.469444,
            "children": []
          },
          {
            "code": "441322",
            "name": "博罗县",
            "level": "district",
            "parentCode": "441300",
            "longitude": 114.284254,
            "children": []
          },
          {
            "code": "441323",
            "name": "惠东县",
            "level": "district",
            "parentCode": "441300",
            "longitude": 114.723092,
            "children": []
          },
          {
            "code": "441324",
            "name": "龙门县",
            "level": "district",
            "parentCode": "441300",
            "longitude": 114.259986,
            "children": []
          }
        ]
      },
      {
        "code": "441400",
        "name": "梅州市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 116.117582,
        "children": [
          {
            "code": "441402",
            "name": "梅江区",
            "level": "district",
            "parentCode": "441400",
            "longitude": 116.12116,
            "children": []
          },
          {
            "code": "441403",
            "name": "梅县区",
            "level": "district",
            "parentCode": "441400",
            "longitude": 116.083482,
            "children": []
          },
          {
            "code": "441422",
            "name": "大埔县",
            "level": "district",
            "parentCode": "441400",
            "longitude": 116.69552,
            "children": []
          },
          {
            "code": "441423",
            "name": "丰顺县",
            "level": "district",
            "parentCode": "441400",
            "longitude": 116.184419,
            "children": []
          },
          {
            "code": "441424",
            "name": "五华县",
            "level": "district",
            "parentCode": "441400",
            "longitude": 115.775004,
            "children": []
          },
          {
            "code": "441426",
            "name": "平远县",
            "level": "district",
            "parentCode": "441400",
            "longitude": 115.891729,
            "children": []
          },
          {
            "code": "441427",
            "name": "蕉岭县",
            "level": "district",
            "parentCode": "441400",
            "longitude": 116.170531,
            "children": []
          },
          {
            "code": "441481",
            "name": "兴宁市",
            "level": "district",
            "parentCode": "441400",
            "longitude": 115.731648,
            "children": []
          }
        ]
      },
      {
        "code": "441500",
        "name": "汕尾市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 115.364238,
        "children": [
          {
            "code": "441502",
            "name": "城区",
            "level": "district",
            "parentCode": "441500",
            "longitude": 115.363667,
            "children": []
          },
          {
            "code": "441521",
            "name": "海丰县",
            "level": "district",
            "parentCode": "441500",
            "longitude": 115.337324,
            "children": []
          },
          {
            "code": "441523",
            "name": "陆河县",
            "level": "district",
            "parentCode": "441500",
            "longitude": 115.657565,
            "children": []
          },
          {
            "code": "441581",
            "name": "陆丰市",
            "level": "district",
            "parentCode": "441500",
            "longitude": 115.644203,
            "children": []
          }
        ]
      },
      {
        "code": "441600",
        "name": "河源市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 114.697802,
        "children": [
          {
            "code": "441602",
            "name": "源城区",
            "level": "district",
            "parentCode": "441600",
            "longitude": 114.696828,
            "children": []
          },
          {
            "code": "441621",
            "name": "紫金县",
            "level": "district",
            "parentCode": "441600",
            "longitude": 115.184383,
            "children": []
          },
          {
            "code": "441622",
            "name": "龙川县",
            "level": "district",
            "parentCode": "441600",
            "longitude": 115.256415,
            "children": []
          },
          {
            "code": "441623",
            "name": "连平县",
            "level": "district",
            "parentCode": "441600",
            "longitude": 114.495952,
            "children": []
          },
          {
            "code": "441624",
            "name": "和平县",
            "level": "district",
            "parentCode": "441600",
            "longitude": 114.941473,
            "children": []
          },
          {
            "code": "441625",
            "name": "东源县",
            "level": "district",
            "parentCode": "441600",
            "longitude": 114.742711,
            "children": []
          }
        ]
      },
      {
        "code": "441700",
        "name": "阳江市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 111.975107,
        "children": [
          {
            "code": "441702",
            "name": "江城区",
            "level": "district",
            "parentCode": "441700",
            "longitude": 111.968909,
            "children": []
          },
          {
            "code": "441704",
            "name": "阳东区",
            "level": "district",
            "parentCode": "441700",
            "longitude": 112.011267,
            "children": []
          },
          {
            "code": "441721",
            "name": "阳西县",
            "level": "district",
            "parentCode": "441700",
            "longitude": 111.617556,
            "children": []
          },
          {
            "code": "441781",
            "name": "阳春市",
            "level": "district",
            "parentCode": "441700",
            "longitude": 111.7905,
            "children": []
          }
        ]
      },
      {
        "code": "441800",
        "name": "清远市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.051227,
        "children": [
          {
            "code": "441802",
            "name": "清城区",
            "level": "district",
            "parentCode": "441800",
            "longitude": 113.048698,
            "children": []
          },
          {
            "code": "441803",
            "name": "清新区",
            "level": "district",
            "parentCode": "441800",
            "longitude": 113.015203,
            "children": []
          },
          {
            "code": "441821",
            "name": "佛冈县",
            "level": "district",
            "parentCode": "441800",
            "longitude": 113.534094,
            "children": []
          },
          {
            "code": "441823",
            "name": "阳山县",
            "level": "district",
            "parentCode": "441800",
            "longitude": 112.634019,
            "children": []
          },
          {
            "code": "441825",
            "name": "连山壮族瑶族自治县",
            "level": "district",
            "parentCode": "441800",
            "longitude": 112.086555,
            "children": []
          },
          {
            "code": "441826",
            "name": "连南瑶族自治县",
            "level": "district",
            "parentCode": "441800",
            "longitude": 112.290808,
            "children": []
          },
          {
            "code": "441881",
            "name": "英德市",
            "level": "district",
            "parentCode": "441800",
            "longitude": 113.405404,
            "children": []
          },
          {
            "code": "441882",
            "name": "连州市",
            "level": "district",
            "parentCode": "441800",
            "longitude": 112.379271,
            "children": []
          }
        ]
      },
      {
        "code": "441900",
        "name": "东莞市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.746262,
        "children": [
          {
            "code": "441900-self",
            "name": "东莞市",
            "level": "district",
            "parentCode": "441900",
            "longitude": 113.746262,
            "children": []
          }
        ]
      },
      {
        "code": "442000",
        "name": "中山市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 113.382391,
        "children": [
          {
            "code": "442000-self",
            "name": "中山市",
            "level": "district",
            "parentCode": "442000",
            "longitude": 113.382391,
            "children": []
          }
        ]
      },
      {
        "code": "445100",
        "name": "潮州市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 116.632301,
        "children": [
          {
            "code": "445102",
            "name": "湘桥区",
            "level": "district",
            "parentCode": "445100",
            "longitude": 116.63365,
            "children": []
          },
          {
            "code": "445103",
            "name": "潮安区",
            "level": "district",
            "parentCode": "445100",
            "longitude": 116.67931,
            "children": []
          },
          {
            "code": "445122",
            "name": "饶平县",
            "level": "district",
            "parentCode": "445100",
            "longitude": 117.00205,
            "children": []
          }
        ]
      },
      {
        "code": "445200",
        "name": "揭阳市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 116.355733,
        "children": [
          {
            "code": "445202",
            "name": "榕城区",
            "level": "district",
            "parentCode": "445200",
            "longitude": 116.357045,
            "children": []
          },
          {
            "code": "445203",
            "name": "揭东区",
            "level": "district",
            "parentCode": "445200",
            "longitude": 116.412947,
            "children": []
          },
          {
            "code": "445222",
            "name": "揭西县",
            "level": "district",
            "parentCode": "445200",
            "longitude": 115.838708,
            "children": []
          },
          {
            "code": "445224",
            "name": "惠来县",
            "level": "district",
            "parentCode": "445200",
            "longitude": 116.295832,
            "children": []
          },
          {
            "code": "445281",
            "name": "普宁市",
            "level": "district",
            "parentCode": "445200",
            "longitude": 116.165082,
            "children": []
          }
        ]
      },
      {
        "code": "445300",
        "name": "云浮市",
        "level": "city",
        "parentCode": "440000",
        "longitude": 112.044439,
        "children": [
          {
            "code": "445302",
            "name": "云城区",
            "level": "district",
            "parentCode": "445300",
            "longitude": 112.04471,
            "children": []
          },
          {
            "code": "445303",
            "name": "云安区",
            "level": "district",
            "parentCode": "445300",
            "longitude": 112.005609,
            "children": []
          },
          {
            "code": "445321",
            "name": "新兴县",
            "level": "district",
            "parentCode": "445300",
            "longitude": 112.23083,
            "children": []
          },
          {
            "code": "445322",
            "name": "郁南县",
            "level": "district",
            "parentCode": "445300",
            "longitude": 111.535921,
            "children": []
          },
          {
            "code": "445381",
            "name": "罗定市",
            "level": "district",
            "parentCode": "445300",
            "longitude": 111.578201,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "450000",
    "name": "广西壮族自治区",
    "level": "province",
    "longitude": 108.320004,
    "children": [
      {
        "code": "450100",
        "name": "南宁市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 108.320004,
        "children": [
          {
            "code": "450102",
            "name": "兴宁区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.320189,
            "children": []
          },
          {
            "code": "450103",
            "name": "青秀区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.346113,
            "children": []
          },
          {
            "code": "450105",
            "name": "江南区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.310478,
            "children": []
          },
          {
            "code": "450107",
            "name": "西乡塘区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.306903,
            "children": []
          },
          {
            "code": "450108",
            "name": "良庆区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.322102,
            "children": []
          },
          {
            "code": "450109",
            "name": "邕宁区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.484251,
            "children": []
          },
          {
            "code": "450110",
            "name": "武鸣区",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.280717,
            "children": []
          },
          {
            "code": "450123",
            "name": "隆安县",
            "level": "district",
            "parentCode": "450100",
            "longitude": 107.688661,
            "children": []
          },
          {
            "code": "450124",
            "name": "马山县",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.172903,
            "children": []
          },
          {
            "code": "450125",
            "name": "上林县",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.603937,
            "children": []
          },
          {
            "code": "450126",
            "name": "宾阳县",
            "level": "district",
            "parentCode": "450100",
            "longitude": 108.816735,
            "children": []
          },
          {
            "code": "450127",
            "name": "横州市",
            "level": "district",
            "parentCode": "450100",
            "longitude": 109.270987,
            "children": []
          }
        ]
      },
      {
        "code": "450200",
        "name": "柳州市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 109.411703,
        "children": [
          {
            "code": "450202",
            "name": "城中区",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.411749,
            "children": []
          },
          {
            "code": "450203",
            "name": "鱼峰区",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.415364,
            "children": []
          },
          {
            "code": "450204",
            "name": "柳南区",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.395936,
            "children": []
          },
          {
            "code": "450205",
            "name": "柳北区",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.406577,
            "children": []
          },
          {
            "code": "450206",
            "name": "柳江区",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.334503,
            "children": []
          },
          {
            "code": "450222",
            "name": "柳城县",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.245812,
            "children": []
          },
          {
            "code": "450223",
            "name": "鹿寨县",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.740805,
            "children": []
          },
          {
            "code": "450224",
            "name": "融安县",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.403621,
            "children": []
          },
          {
            "code": "450225",
            "name": "融水苗族自治县",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.252744,
            "children": []
          },
          {
            "code": "450226",
            "name": "三江侗族自治县",
            "level": "district",
            "parentCode": "450200",
            "longitude": 109.614846,
            "children": []
          }
        ]
      },
      {
        "code": "450300",
        "name": "桂林市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 110.299121,
        "children": [
          {
            "code": "450302",
            "name": "秀峰区",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.292445,
            "children": []
          },
          {
            "code": "450303",
            "name": "叠彩区",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.300783,
            "children": []
          },
          {
            "code": "450304",
            "name": "象山区",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.284882,
            "children": []
          },
          {
            "code": "450305",
            "name": "七星区",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.317577,
            "children": []
          },
          {
            "code": "450311",
            "name": "雁山区",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.305667,
            "children": []
          },
          {
            "code": "450312",
            "name": "临桂区",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.205487,
            "children": []
          },
          {
            "code": "450321",
            "name": "阳朔县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.494699,
            "children": []
          },
          {
            "code": "450323",
            "name": "灵川县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.325712,
            "children": []
          },
          {
            "code": "450324",
            "name": "全州县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 111.072989,
            "children": []
          },
          {
            "code": "450325",
            "name": "兴安县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.670783,
            "children": []
          },
          {
            "code": "450326",
            "name": "永福县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 109.989208,
            "children": []
          },
          {
            "code": "450327",
            "name": "灌阳县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 111.160248,
            "children": []
          },
          {
            "code": "450328",
            "name": "龙胜各族自治县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.009423,
            "children": []
          },
          {
            "code": "450329",
            "name": "资源县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.642587,
            "children": []
          },
          {
            "code": "450330",
            "name": "平乐县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.642821,
            "children": []
          },
          {
            "code": "450332",
            "name": "恭城瑶族自治县",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.82952,
            "children": []
          },
          {
            "code": "450381",
            "name": "荔浦市",
            "level": "district",
            "parentCode": "450300",
            "longitude": 110.400149,
            "children": []
          }
        ]
      },
      {
        "code": "450400",
        "name": "梧州市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 111.297604,
        "children": [
          {
            "code": "450403",
            "name": "万秀区",
            "level": "district",
            "parentCode": "450400",
            "longitude": 111.315817,
            "children": []
          },
          {
            "code": "450405",
            "name": "长洲区",
            "level": "district",
            "parentCode": "450400",
            "longitude": 111.275678,
            "children": []
          },
          {
            "code": "450406",
            "name": "龙圩区",
            "level": "district",
            "parentCode": "450400",
            "longitude": 111.246035,
            "children": []
          },
          {
            "code": "450421",
            "name": "苍梧县",
            "level": "district",
            "parentCode": "450400",
            "longitude": 111.544008,
            "children": []
          },
          {
            "code": "450422",
            "name": "藤县",
            "level": "district",
            "parentCode": "450400",
            "longitude": 110.931826,
            "children": []
          },
          {
            "code": "450423",
            "name": "蒙山县",
            "level": "district",
            "parentCode": "450400",
            "longitude": 110.5226,
            "children": []
          },
          {
            "code": "450481",
            "name": "岑溪市",
            "level": "district",
            "parentCode": "450400",
            "longitude": 110.998114,
            "children": []
          }
        ]
      },
      {
        "code": "450500",
        "name": "北海市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 109.119254,
        "children": [
          {
            "code": "450502",
            "name": "海城区",
            "level": "district",
            "parentCode": "450500",
            "longitude": 109.107529,
            "children": []
          },
          {
            "code": "450503",
            "name": "银海区",
            "level": "district",
            "parentCode": "450500",
            "longitude": 109.118707,
            "children": []
          },
          {
            "code": "450512",
            "name": "铁山港区",
            "level": "district",
            "parentCode": "450500",
            "longitude": 109.450573,
            "children": []
          },
          {
            "code": "450521",
            "name": "合浦县",
            "level": "district",
            "parentCode": "450500",
            "longitude": 109.200695,
            "children": []
          }
        ]
      },
      {
        "code": "450600",
        "name": "防城港市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 108.345478,
        "children": [
          {
            "code": "450602",
            "name": "港口区",
            "level": "district",
            "parentCode": "450600",
            "longitude": 108.346281,
            "children": []
          },
          {
            "code": "450603",
            "name": "防城区",
            "level": "district",
            "parentCode": "450600",
            "longitude": 108.358426,
            "children": []
          },
          {
            "code": "450621",
            "name": "上思县",
            "level": "district",
            "parentCode": "450600",
            "longitude": 107.982139,
            "children": []
          },
          {
            "code": "450681",
            "name": "东兴市",
            "level": "district",
            "parentCode": "450600",
            "longitude": 107.97017,
            "children": []
          }
        ]
      },
      {
        "code": "450700",
        "name": "钦州市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 108.624175,
        "children": [
          {
            "code": "450702",
            "name": "钦南区",
            "level": "district",
            "parentCode": "450700",
            "longitude": 108.626629,
            "children": []
          },
          {
            "code": "450703",
            "name": "钦北区",
            "level": "district",
            "parentCode": "450700",
            "longitude": 108.44911,
            "children": []
          },
          {
            "code": "450721",
            "name": "灵山县",
            "level": "district",
            "parentCode": "450700",
            "longitude": 109.293468,
            "children": []
          },
          {
            "code": "450722",
            "name": "浦北县",
            "level": "district",
            "parentCode": "450700",
            "longitude": 109.556341,
            "children": []
          }
        ]
      },
      {
        "code": "450800",
        "name": "贵港市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 109.602146,
        "children": [
          {
            "code": "450802",
            "name": "港北区",
            "level": "district",
            "parentCode": "450800",
            "longitude": 109.59481,
            "children": []
          },
          {
            "code": "450803",
            "name": "港南区",
            "level": "district",
            "parentCode": "450800",
            "longitude": 109.604665,
            "children": []
          },
          {
            "code": "450804",
            "name": "覃塘区",
            "level": "district",
            "parentCode": "450800",
            "longitude": 109.415697,
            "children": []
          },
          {
            "code": "450821",
            "name": "平南县",
            "level": "district",
            "parentCode": "450800",
            "longitude": 110.397485,
            "children": []
          },
          {
            "code": "450881",
            "name": "桂平市",
            "level": "district",
            "parentCode": "450800",
            "longitude": 110.074668,
            "children": []
          }
        ]
      },
      {
        "code": "450900",
        "name": "玉林市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 110.154393,
        "children": [
          {
            "code": "450902",
            "name": "玉州区",
            "level": "district",
            "parentCode": "450900",
            "longitude": 110.154912,
            "children": []
          },
          {
            "code": "450903",
            "name": "福绵区",
            "level": "district",
            "parentCode": "450900",
            "longitude": 110.054155,
            "children": []
          },
          {
            "code": "450921",
            "name": "容县",
            "level": "district",
            "parentCode": "450900",
            "longitude": 110.552467,
            "children": []
          },
          {
            "code": "450922",
            "name": "陆川县",
            "level": "district",
            "parentCode": "450900",
            "longitude": 110.264842,
            "children": []
          },
          {
            "code": "450923",
            "name": "博白县",
            "level": "district",
            "parentCode": "450900",
            "longitude": 109.980004,
            "children": []
          },
          {
            "code": "450924",
            "name": "兴业县",
            "level": "district",
            "parentCode": "450900",
            "longitude": 109.877768,
            "children": []
          },
          {
            "code": "450981",
            "name": "北流市",
            "level": "district",
            "parentCode": "450900",
            "longitude": 110.348052,
            "children": []
          }
        ]
      },
      {
        "code": "451000",
        "name": "百色市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 106.616285,
        "children": [
          {
            "code": "451002",
            "name": "右江区",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.615727,
            "children": []
          },
          {
            "code": "451003",
            "name": "田阳区",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.904315,
            "children": []
          },
          {
            "code": "451022",
            "name": "田东县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 107.12426,
            "children": []
          },
          {
            "code": "451024",
            "name": "德保县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.618164,
            "children": []
          },
          {
            "code": "451026",
            "name": "那坡县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 105.833553,
            "children": []
          },
          {
            "code": "451027",
            "name": "凌云县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.56487,
            "children": []
          },
          {
            "code": "451028",
            "name": "乐业县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.559638,
            "children": []
          },
          {
            "code": "451029",
            "name": "田林县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.235047,
            "children": []
          },
          {
            "code": "451030",
            "name": "西林县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 105.095025,
            "children": []
          },
          {
            "code": "451031",
            "name": "隆林各族自治县",
            "level": "district",
            "parentCode": "451000",
            "longitude": 105.342363,
            "children": []
          },
          {
            "code": "451081",
            "name": "靖西市",
            "level": "district",
            "parentCode": "451000",
            "longitude": 106.417549,
            "children": []
          },
          {
            "code": "451082",
            "name": "平果市",
            "level": "district",
            "parentCode": "451000",
            "longitude": 107.580403,
            "children": []
          }
        ]
      },
      {
        "code": "451100",
        "name": "贺州市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 111.552056,
        "children": [
          {
            "code": "451102",
            "name": "八步区",
            "level": "district",
            "parentCode": "451100",
            "longitude": 111.551991,
            "children": []
          },
          {
            "code": "451103",
            "name": "平桂区",
            "level": "district",
            "parentCode": "451100",
            "longitude": 111.524014,
            "children": []
          },
          {
            "code": "451121",
            "name": "昭平县",
            "level": "district",
            "parentCode": "451100",
            "longitude": 110.810865,
            "children": []
          },
          {
            "code": "451122",
            "name": "钟山县",
            "level": "district",
            "parentCode": "451100",
            "longitude": 111.303629,
            "children": []
          },
          {
            "code": "451123",
            "name": "富川瑶族自治县",
            "level": "district",
            "parentCode": "451100",
            "longitude": 111.277228,
            "children": []
          }
        ]
      },
      {
        "code": "451200",
        "name": "河池市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 108.062105,
        "children": [
          {
            "code": "451202",
            "name": "金城江区",
            "level": "district",
            "parentCode": "451200",
            "longitude": 108.062131,
            "children": []
          },
          {
            "code": "451203",
            "name": "宜州区",
            "level": "district",
            "parentCode": "451200",
            "longitude": 108.653965,
            "children": []
          },
          {
            "code": "451221",
            "name": "南丹县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 107.546605,
            "children": []
          },
          {
            "code": "451222",
            "name": "天峨县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 107.174939,
            "children": []
          },
          {
            "code": "451223",
            "name": "凤山县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 107.044592,
            "children": []
          },
          {
            "code": "451224",
            "name": "东兰县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 107.373696,
            "children": []
          },
          {
            "code": "451225",
            "name": "罗城仫佬族自治县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 108.902453,
            "children": []
          },
          {
            "code": "451226",
            "name": "环江毛南族自治县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 108.258669,
            "children": []
          },
          {
            "code": "451227",
            "name": "巴马瑶族自治县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 107.253126,
            "children": []
          },
          {
            "code": "451228",
            "name": "都安瑶族自治县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 108.102761,
            "children": []
          },
          {
            "code": "451229",
            "name": "大化瑶族自治县",
            "level": "district",
            "parentCode": "451200",
            "longitude": 107.9945,
            "children": []
          }
        ]
      },
      {
        "code": "451300",
        "name": "来宾市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 109.229772,
        "children": [
          {
            "code": "451302",
            "name": "兴宾区",
            "level": "district",
            "parentCode": "451300",
            "longitude": 109.230541,
            "children": []
          },
          {
            "code": "451321",
            "name": "忻城县",
            "level": "district",
            "parentCode": "451300",
            "longitude": 108.667361,
            "children": []
          },
          {
            "code": "451322",
            "name": "象州县",
            "level": "district",
            "parentCode": "451300",
            "longitude": 109.684555,
            "children": []
          },
          {
            "code": "451323",
            "name": "武宣县",
            "level": "district",
            "parentCode": "451300",
            "longitude": 109.66287,
            "children": []
          },
          {
            "code": "451324",
            "name": "金秀瑶族自治县",
            "level": "district",
            "parentCode": "451300",
            "longitude": 110.188556,
            "children": []
          },
          {
            "code": "451381",
            "name": "合山市",
            "level": "district",
            "parentCode": "451300",
            "longitude": 108.88858,
            "children": []
          }
        ]
      },
      {
        "code": "451400",
        "name": "崇左市",
        "level": "city",
        "parentCode": "450000",
        "longitude": 107.353926,
        "children": [
          {
            "code": "451402",
            "name": "江州区",
            "level": "district",
            "parentCode": "451400",
            "longitude": 107.354443,
            "children": []
          },
          {
            "code": "451421",
            "name": "扶绥县",
            "level": "district",
            "parentCode": "451400",
            "longitude": 107.911533,
            "children": []
          },
          {
            "code": "451422",
            "name": "宁明县",
            "level": "district",
            "parentCode": "451400",
            "longitude": 107.067616,
            "children": []
          },
          {
            "code": "451423",
            "name": "龙州县",
            "level": "district",
            "parentCode": "451400",
            "longitude": 106.857502,
            "children": []
          },
          {
            "code": "451424",
            "name": "大新县",
            "level": "district",
            "parentCode": "451400",
            "longitude": 107.200803,
            "children": []
          },
          {
            "code": "451425",
            "name": "天等县",
            "level": "district",
            "parentCode": "451400",
            "longitude": 107.142441,
            "children": []
          },
          {
            "code": "451481",
            "name": "凭祥市",
            "level": "district",
            "parentCode": "451400",
            "longitude": 106.759038,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "460000",
    "name": "海南省",
    "level": "province",
    "longitude": 110.33119,
    "children": [
      {
        "code": "460100",
        "name": "海口市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.33119,
        "children": [
          {
            "code": "460105",
            "name": "秀英区",
            "level": "district",
            "parentCode": "460100",
            "longitude": 110.282393,
            "children": []
          },
          {
            "code": "460106",
            "name": "龙华区",
            "level": "district",
            "parentCode": "460100",
            "longitude": 110.330373,
            "children": []
          },
          {
            "code": "460107",
            "name": "琼山区",
            "level": "district",
            "parentCode": "460100",
            "longitude": 110.354722,
            "children": []
          },
          {
            "code": "460108",
            "name": "美兰区",
            "level": "district",
            "parentCode": "460100",
            "longitude": 110.356566,
            "children": []
          }
        ]
      },
      {
        "code": "460200",
        "name": "三亚市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.508268,
        "children": [
          {
            "code": "460202",
            "name": "海棠区",
            "level": "district",
            "parentCode": "460200",
            "longitude": 109.760778,
            "children": []
          },
          {
            "code": "460203",
            "name": "吉阳区",
            "level": "district",
            "parentCode": "460200",
            "longitude": 109.512081,
            "children": []
          },
          {
            "code": "460204",
            "name": "天涯区",
            "level": "district",
            "parentCode": "460200",
            "longitude": 109.506357,
            "children": []
          },
          {
            "code": "460205",
            "name": "崖州区",
            "level": "district",
            "parentCode": "460200",
            "longitude": 109.174306,
            "children": []
          }
        ]
      },
      {
        "code": "460300",
        "name": "三沙市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 112.34882,
        "children": [
          {
            "code": "460301",
            "name": "西沙区",
            "level": "district",
            "parentCode": "460300",
            "longitude": 112.33864,
            "children": []
          },
          {
            "code": "460302",
            "name": "南沙区",
            "level": "district",
            "parentCode": "460300",
            "longitude": 112.891018,
            "children": []
          }
        ]
      },
      {
        "code": "460400",
        "name": "儋州市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.576782,
        "children": [
          {
            "code": "460400-self",
            "name": "儋州市",
            "level": "district",
            "parentCode": "460400",
            "longitude": 109.576782,
            "children": []
          }
        ]
      },
      {
        "code": "469001",
        "name": "五指山市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.516662,
        "children": [
          {
            "code": "469001-self",
            "name": "五指山市",
            "level": "district",
            "parentCode": "469001",
            "longitude": 109.516662,
            "children": []
          }
        ]
      },
      {
        "code": "469002",
        "name": "琼海市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.466785,
        "children": [
          {
            "code": "469002-self",
            "name": "琼海市",
            "level": "district",
            "parentCode": "469002",
            "longitude": 110.466785,
            "children": []
          }
        ]
      },
      {
        "code": "469005",
        "name": "文昌市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.753975,
        "children": [
          {
            "code": "469005-self",
            "name": "文昌市",
            "level": "district",
            "parentCode": "469005",
            "longitude": 110.753975,
            "children": []
          }
        ]
      },
      {
        "code": "469006",
        "name": "万宁市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.388793,
        "children": [
          {
            "code": "469006-self",
            "name": "万宁市",
            "level": "district",
            "parentCode": "469006",
            "longitude": 110.388793,
            "children": []
          }
        ]
      },
      {
        "code": "469007",
        "name": "东方市",
        "level": "city",
        "parentCode": "460000",
        "longitude": 108.653789,
        "children": [
          {
            "code": "469007-self",
            "name": "东方市",
            "level": "district",
            "parentCode": "469007",
            "longitude": 108.653789,
            "children": []
          }
        ]
      },
      {
        "code": "469021",
        "name": "定安县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.349235,
        "children": [
          {
            "code": "469021-self",
            "name": "定安县",
            "level": "district",
            "parentCode": "469021",
            "longitude": 110.349235,
            "children": []
          }
        ]
      },
      {
        "code": "469022",
        "name": "屯昌县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.102773,
        "children": [
          {
            "code": "469022-self",
            "name": "屯昌县",
            "level": "district",
            "parentCode": "469022",
            "longitude": 110.102773,
            "children": []
          }
        ]
      },
      {
        "code": "469023",
        "name": "澄迈县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.007147,
        "children": [
          {
            "code": "469023-self",
            "name": "澄迈县",
            "level": "district",
            "parentCode": "469023",
            "longitude": 110.007147,
            "children": []
          }
        ]
      },
      {
        "code": "469024",
        "name": "临高县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.687697,
        "children": [
          {
            "code": "469024-self",
            "name": "临高县",
            "level": "district",
            "parentCode": "469024",
            "longitude": 109.687697,
            "children": []
          }
        ]
      },
      {
        "code": "469025",
        "name": "白沙黎族自治县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.452606,
        "children": [
          {
            "code": "469025-self",
            "name": "白沙黎族自治县",
            "level": "district",
            "parentCode": "469025",
            "longitude": 109.452606,
            "children": []
          }
        ]
      },
      {
        "code": "469026",
        "name": "昌江黎族自治县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.053351,
        "children": [
          {
            "code": "469026-self",
            "name": "昌江黎族自治县",
            "level": "district",
            "parentCode": "469026",
            "longitude": 109.053351,
            "children": []
          }
        ]
      },
      {
        "code": "469027",
        "name": "乐东黎族自治县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.175444,
        "children": [
          {
            "code": "469027-self",
            "name": "乐东黎族自治县",
            "level": "district",
            "parentCode": "469027",
            "longitude": 109.175444,
            "children": []
          }
        ]
      },
      {
        "code": "469028",
        "name": "陵水黎族自治县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 110.037218,
        "children": [
          {
            "code": "469028-self",
            "name": "陵水黎族自治县",
            "level": "district",
            "parentCode": "469028",
            "longitude": 110.037218,
            "children": []
          }
        ]
      },
      {
        "code": "469029",
        "name": "保亭黎族苗族自治县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.70245,
        "children": [
          {
            "code": "469029-self",
            "name": "保亭黎族苗族自治县",
            "level": "district",
            "parentCode": "469029",
            "longitude": 109.70245,
            "children": []
          }
        ]
      },
      {
        "code": "469030",
        "name": "琼中黎族苗族自治县",
        "level": "city",
        "parentCode": "460000",
        "longitude": 109.839996,
        "children": [
          {
            "code": "469030-self",
            "name": "琼中黎族苗族自治县",
            "level": "district",
            "parentCode": "469030",
            "longitude": 109.839996,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "500000",
    "name": "重庆市",
    "level": "province",
    "longitude": 106.504962,
    "children": [
      {
        "code": "500000-direct",
        "name": "重庆市",
        "level": "city",
        "parentCode": "500000",
        "longitude": 106.504962,
        "children": [
          {
            "code": "500101",
            "name": "万州区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.380246,
            "children": []
          },
          {
            "code": "500102",
            "name": "涪陵区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.394905,
            "children": []
          },
          {
            "code": "500103",
            "name": "渝中区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.56288,
            "children": []
          },
          {
            "code": "500104",
            "name": "大渡口区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.48613,
            "children": []
          },
          {
            "code": "500105",
            "name": "江北区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.532844,
            "children": []
          },
          {
            "code": "500106",
            "name": "沙坪坝区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.4542,
            "children": []
          },
          {
            "code": "500107",
            "name": "九龙坡区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.480989,
            "children": []
          },
          {
            "code": "500108",
            "name": "南岸区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.560813,
            "children": []
          },
          {
            "code": "500109",
            "name": "北碚区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.437868,
            "children": []
          },
          {
            "code": "500110",
            "name": "綦江区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.651417,
            "children": []
          },
          {
            "code": "500111",
            "name": "大足区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 105.715319,
            "children": []
          },
          {
            "code": "500112",
            "name": "渝北区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.512851,
            "children": []
          },
          {
            "code": "500113",
            "name": "巴南区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.519423,
            "children": []
          },
          {
            "code": "500114",
            "name": "黔江区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.782577,
            "children": []
          },
          {
            "code": "500115",
            "name": "长寿区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.074854,
            "children": []
          },
          {
            "code": "500116",
            "name": "江津区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.253156,
            "children": []
          },
          {
            "code": "500117",
            "name": "合川区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.265554,
            "children": []
          },
          {
            "code": "500118",
            "name": "永川区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 105.894714,
            "children": []
          },
          {
            "code": "500119",
            "name": "南川区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.098153,
            "children": []
          },
          {
            "code": "500120",
            "name": "璧山区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.231126,
            "children": []
          },
          {
            "code": "500151",
            "name": "铜梁区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 106.054948,
            "children": []
          },
          {
            "code": "500152",
            "name": "潼南区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 105.841818,
            "children": []
          },
          {
            "code": "500153",
            "name": "荣昌区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 105.594061,
            "children": []
          },
          {
            "code": "500154",
            "name": "开州区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.413317,
            "children": []
          },
          {
            "code": "500155",
            "name": "梁平区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.800034,
            "children": []
          },
          {
            "code": "500156",
            "name": "武隆区",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.75655,
            "children": []
          },
          {
            "code": "500229",
            "name": "城口县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.6649,
            "children": []
          },
          {
            "code": "500230",
            "name": "丰都县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.73248,
            "children": []
          },
          {
            "code": "500231",
            "name": "垫江县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 107.348692,
            "children": []
          },
          {
            "code": "500233",
            "name": "忠县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.037518,
            "children": []
          },
          {
            "code": "500235",
            "name": "云阳县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.697698,
            "children": []
          },
          {
            "code": "500236",
            "name": "奉节县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 109.465774,
            "children": []
          },
          {
            "code": "500237",
            "name": "巫山县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 109.878928,
            "children": []
          },
          {
            "code": "500238",
            "name": "巫溪县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 109.628912,
            "children": []
          },
          {
            "code": "500240",
            "name": "石柱土家族自治县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.112448,
            "children": []
          },
          {
            "code": "500241",
            "name": "秀山土家族苗族自治县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.996043,
            "children": []
          },
          {
            "code": "500242",
            "name": "酉阳土家族苗族自治县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.767201,
            "children": []
          },
          {
            "code": "500243",
            "name": "彭水苗族土家族自治县",
            "level": "district",
            "parentCode": "500000-direct",
            "longitude": 108.166551,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "510000",
    "name": "四川省",
    "level": "province",
    "longitude": 104.065735,
    "children": [
      {
        "code": "510100",
        "name": "成都市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 104.065735,
        "children": [
          {
            "code": "510104",
            "name": "锦江区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.080989,
            "children": []
          },
          {
            "code": "510105",
            "name": "青羊区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.055731,
            "children": []
          },
          {
            "code": "510106",
            "name": "金牛区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.043487,
            "children": []
          },
          {
            "code": "510107",
            "name": "武侯区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.05167,
            "children": []
          },
          {
            "code": "510108",
            "name": "成华区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.103077,
            "children": []
          },
          {
            "code": "510112",
            "name": "龙泉驿区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.269181,
            "children": []
          },
          {
            "code": "510113",
            "name": "青白江区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.25494,
            "children": []
          },
          {
            "code": "510114",
            "name": "新都区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.16022,
            "children": []
          },
          {
            "code": "510115",
            "name": "温江区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.836776,
            "children": []
          },
          {
            "code": "510116",
            "name": "双流区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.922706,
            "children": []
          },
          {
            "code": "510117",
            "name": "郫都区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.887842,
            "children": []
          },
          {
            "code": "510118",
            "name": "新津区",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.812449,
            "children": []
          },
          {
            "code": "510121",
            "name": "金堂县",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.415604,
            "children": []
          },
          {
            "code": "510129",
            "name": "大邑县",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.522397,
            "children": []
          },
          {
            "code": "510131",
            "name": "蒲江县",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.511541,
            "children": []
          },
          {
            "code": "510181",
            "name": "都江堰市",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.627898,
            "children": []
          },
          {
            "code": "510182",
            "name": "彭州市",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.941173,
            "children": []
          },
          {
            "code": "510183",
            "name": "邛崃市",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.46143,
            "children": []
          },
          {
            "code": "510184",
            "name": "崇州市",
            "level": "district",
            "parentCode": "510100",
            "longitude": 103.671049,
            "children": []
          },
          {
            "code": "510185",
            "name": "简阳市",
            "level": "district",
            "parentCode": "510100",
            "longitude": 104.550339,
            "children": []
          }
        ]
      },
      {
        "code": "510300",
        "name": "自贡市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 104.773447,
        "children": [
          {
            "code": "510302",
            "name": "自流井区",
            "level": "district",
            "parentCode": "510300",
            "longitude": 104.778188,
            "children": []
          },
          {
            "code": "510303",
            "name": "贡井区",
            "level": "district",
            "parentCode": "510300",
            "longitude": 104.714372,
            "children": []
          },
          {
            "code": "510304",
            "name": "大安区",
            "level": "district",
            "parentCode": "510300",
            "longitude": 104.783229,
            "children": []
          },
          {
            "code": "510311",
            "name": "沿滩区",
            "level": "district",
            "parentCode": "510300",
            "longitude": 104.876417,
            "children": []
          },
          {
            "code": "510321",
            "name": "荣县",
            "level": "district",
            "parentCode": "510300",
            "longitude": 104.423932,
            "children": []
          },
          {
            "code": "510322",
            "name": "富顺县",
            "level": "district",
            "parentCode": "510300",
            "longitude": 104.984256,
            "children": []
          }
        ]
      },
      {
        "code": "510400",
        "name": "攀枝花市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 101.716007,
        "children": [
          {
            "code": "510402",
            "name": "东区",
            "level": "district",
            "parentCode": "510400",
            "longitude": 101.715134,
            "children": []
          },
          {
            "code": "510403",
            "name": "西区",
            "level": "district",
            "parentCode": "510400",
            "longitude": 101.637969,
            "children": []
          },
          {
            "code": "510411",
            "name": "仁和区",
            "level": "district",
            "parentCode": "510400",
            "longitude": 101.737916,
            "children": []
          },
          {
            "code": "510421",
            "name": "米易县",
            "level": "district",
            "parentCode": "510400",
            "longitude": 102.109877,
            "children": []
          },
          {
            "code": "510422",
            "name": "盐边县",
            "level": "district",
            "parentCode": "510400",
            "longitude": 101.851848,
            "children": []
          }
        ]
      },
      {
        "code": "510500",
        "name": "泸州市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 105.443348,
        "children": [
          {
            "code": "510502",
            "name": "江阳区",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.445131,
            "children": []
          },
          {
            "code": "510503",
            "name": "纳溪区",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.37721,
            "children": []
          },
          {
            "code": "510504",
            "name": "龙马潭区",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.435228,
            "children": []
          },
          {
            "code": "510521",
            "name": "泸县",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.376335,
            "children": []
          },
          {
            "code": "510522",
            "name": "合江县",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.834098,
            "children": []
          },
          {
            "code": "510524",
            "name": "叙永县",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.437775,
            "children": []
          },
          {
            "code": "510525",
            "name": "古蔺县",
            "level": "district",
            "parentCode": "510500",
            "longitude": 105.813359,
            "children": []
          }
        ]
      },
      {
        "code": "510600",
        "name": "德阳市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 104.398651,
        "children": [
          {
            "code": "510603",
            "name": "旌阳区",
            "level": "district",
            "parentCode": "510600",
            "longitude": 104.389648,
            "children": []
          },
          {
            "code": "510604",
            "name": "罗江区",
            "level": "district",
            "parentCode": "510600",
            "longitude": 104.507126,
            "children": []
          },
          {
            "code": "510623",
            "name": "中江县",
            "level": "district",
            "parentCode": "510600",
            "longitude": 104.677831,
            "children": []
          },
          {
            "code": "510681",
            "name": "广汉市",
            "level": "district",
            "parentCode": "510600",
            "longitude": 104.281903,
            "children": []
          },
          {
            "code": "510682",
            "name": "什邡市",
            "level": "district",
            "parentCode": "510600",
            "longitude": 104.173653,
            "children": []
          },
          {
            "code": "510683",
            "name": "绵竹市",
            "level": "district",
            "parentCode": "510600",
            "longitude": 104.200162,
            "children": []
          }
        ]
      },
      {
        "code": "510700",
        "name": "绵阳市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 104.741722,
        "children": [
          {
            "code": "510703",
            "name": "涪城区",
            "level": "district",
            "parentCode": "510700",
            "longitude": 104.740971,
            "children": []
          },
          {
            "code": "510704",
            "name": "游仙区",
            "level": "district",
            "parentCode": "510700",
            "longitude": 104.770006,
            "children": []
          },
          {
            "code": "510705",
            "name": "安州区",
            "level": "district",
            "parentCode": "510700",
            "longitude": 104.560341,
            "children": []
          },
          {
            "code": "510722",
            "name": "三台县",
            "level": "district",
            "parentCode": "510700",
            "longitude": 105.090316,
            "children": []
          },
          {
            "code": "510723",
            "name": "盐亭县",
            "level": "district",
            "parentCode": "510700",
            "longitude": 105.391991,
            "children": []
          },
          {
            "code": "510725",
            "name": "梓潼县",
            "level": "district",
            "parentCode": "510700",
            "longitude": 105.16353,
            "children": []
          },
          {
            "code": "510726",
            "name": "北川羌族自治县",
            "level": "district",
            "parentCode": "510700",
            "longitude": 104.468069,
            "children": []
          },
          {
            "code": "510727",
            "name": "平武县",
            "level": "district",
            "parentCode": "510700",
            "longitude": 104.530555,
            "children": []
          },
          {
            "code": "510781",
            "name": "江油市",
            "level": "district",
            "parentCode": "510700",
            "longitude": 104.744431,
            "children": []
          }
        ]
      },
      {
        "code": "510800",
        "name": "广元市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 105.829757,
        "children": [
          {
            "code": "510802",
            "name": "利州区",
            "level": "district",
            "parentCode": "510800",
            "longitude": 105.826194,
            "children": []
          },
          {
            "code": "510811",
            "name": "昭化区",
            "level": "district",
            "parentCode": "510800",
            "longitude": 105.964121,
            "children": []
          },
          {
            "code": "510812",
            "name": "朝天区",
            "level": "district",
            "parentCode": "510800",
            "longitude": 105.88917,
            "children": []
          },
          {
            "code": "510821",
            "name": "旺苍县",
            "level": "district",
            "parentCode": "510800",
            "longitude": 106.290426,
            "children": []
          },
          {
            "code": "510822",
            "name": "青川县",
            "level": "district",
            "parentCode": "510800",
            "longitude": 105.238847,
            "children": []
          },
          {
            "code": "510823",
            "name": "剑阁县",
            "level": "district",
            "parentCode": "510800",
            "longitude": 105.527035,
            "children": []
          },
          {
            "code": "510824",
            "name": "苍溪县",
            "level": "district",
            "parentCode": "510800",
            "longitude": 105.939706,
            "children": []
          }
        ]
      },
      {
        "code": "510900",
        "name": "遂宁市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 105.571331,
        "children": [
          {
            "code": "510903",
            "name": "船山区",
            "level": "district",
            "parentCode": "510900",
            "longitude": 105.582215,
            "children": []
          },
          {
            "code": "510904",
            "name": "安居区",
            "level": "district",
            "parentCode": "510900",
            "longitude": 105.459383,
            "children": []
          },
          {
            "code": "510921",
            "name": "蓬溪县",
            "level": "district",
            "parentCode": "510900",
            "longitude": 105.713699,
            "children": []
          },
          {
            "code": "510923",
            "name": "大英县",
            "level": "district",
            "parentCode": "510900",
            "longitude": 105.252187,
            "children": []
          },
          {
            "code": "510981",
            "name": "射洪市",
            "level": "district",
            "parentCode": "510900",
            "longitude": 105.381849,
            "children": []
          }
        ]
      },
      {
        "code": "511000",
        "name": "内江市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 105.066138,
        "children": [
          {
            "code": "511002",
            "name": "市中区",
            "level": "district",
            "parentCode": "511000",
            "longitude": 105.065467,
            "children": []
          },
          {
            "code": "511011",
            "name": "东兴区",
            "level": "district",
            "parentCode": "511000",
            "longitude": 105.067203,
            "children": []
          },
          {
            "code": "511024",
            "name": "威远县",
            "level": "district",
            "parentCode": "511000",
            "longitude": 104.668327,
            "children": []
          },
          {
            "code": "511025",
            "name": "资中县",
            "level": "district",
            "parentCode": "511000",
            "longitude": 104.852463,
            "children": []
          },
          {
            "code": "511083",
            "name": "隆昌市",
            "level": "district",
            "parentCode": "511000",
            "longitude": 105.288074,
            "children": []
          }
        ]
      },
      {
        "code": "511100",
        "name": "乐山市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 103.761263,
        "children": [
          {
            "code": "511102",
            "name": "市中区",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.75539,
            "children": []
          },
          {
            "code": "511111",
            "name": "沙湾区",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.549961,
            "children": []
          },
          {
            "code": "511112",
            "name": "五通桥区",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.816837,
            "children": []
          },
          {
            "code": "511113",
            "name": "金口河区",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.077831,
            "children": []
          },
          {
            "code": "511123",
            "name": "犍为县",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.944266,
            "children": []
          },
          {
            "code": "511124",
            "name": "井研县",
            "level": "district",
            "parentCode": "511100",
            "longitude": 104.06885,
            "children": []
          },
          {
            "code": "511126",
            "name": "夹江县",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.578862,
            "children": []
          },
          {
            "code": "511129",
            "name": "沐川县",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.90211,
            "children": []
          },
          {
            "code": "511132",
            "name": "峨边彝族自治县",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.262148,
            "children": []
          },
          {
            "code": "511133",
            "name": "马边彝族自治县",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.546851,
            "children": []
          },
          {
            "code": "511181",
            "name": "峨眉山市",
            "level": "district",
            "parentCode": "511100",
            "longitude": 103.492488,
            "children": []
          }
        ]
      },
      {
        "code": "511300",
        "name": "南充市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 106.082974,
        "children": [
          {
            "code": "511302",
            "name": "顺庆区",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.084091,
            "children": []
          },
          {
            "code": "511303",
            "name": "高坪区",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.108996,
            "children": []
          },
          {
            "code": "511304",
            "name": "嘉陵区",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.067027,
            "children": []
          },
          {
            "code": "511321",
            "name": "南部县",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.061138,
            "children": []
          },
          {
            "code": "511322",
            "name": "营山县",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.564893,
            "children": []
          },
          {
            "code": "511323",
            "name": "蓬安县",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.413488,
            "children": []
          },
          {
            "code": "511324",
            "name": "仪陇县",
            "level": "district",
            "parentCode": "511300",
            "longitude": 106.297083,
            "children": []
          },
          {
            "code": "511325",
            "name": "西充县",
            "level": "district",
            "parentCode": "511300",
            "longitude": 105.893021,
            "children": []
          },
          {
            "code": "511381",
            "name": "阆中市",
            "level": "district",
            "parentCode": "511300",
            "longitude": 105.975266,
            "children": []
          }
        ]
      },
      {
        "code": "511400",
        "name": "眉山市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 103.831788,
        "children": [
          {
            "code": "511402",
            "name": "东坡区",
            "level": "district",
            "parentCode": "511400",
            "longitude": 103.831553,
            "children": []
          },
          {
            "code": "511403",
            "name": "彭山区",
            "level": "district",
            "parentCode": "511400",
            "longitude": 103.8701,
            "children": []
          },
          {
            "code": "511421",
            "name": "仁寿县",
            "level": "district",
            "parentCode": "511400",
            "longitude": 104.147646,
            "children": []
          },
          {
            "code": "511423",
            "name": "洪雅县",
            "level": "district",
            "parentCode": "511400",
            "longitude": 103.375006,
            "children": []
          },
          {
            "code": "511424",
            "name": "丹棱县",
            "level": "district",
            "parentCode": "511400",
            "longitude": 103.518333,
            "children": []
          },
          {
            "code": "511425",
            "name": "青神县",
            "level": "district",
            "parentCode": "511400",
            "longitude": 103.846131,
            "children": []
          }
        ]
      },
      {
        "code": "511500",
        "name": "宜宾市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 104.630825,
        "children": [
          {
            "code": "511502",
            "name": "翠屏区",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.630231,
            "children": []
          },
          {
            "code": "511503",
            "name": "南溪区",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.981133,
            "children": []
          },
          {
            "code": "511504",
            "name": "叙州区",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.541489,
            "children": []
          },
          {
            "code": "511523",
            "name": "江安县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 105.068697,
            "children": []
          },
          {
            "code": "511524",
            "name": "长宁县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.921116,
            "children": []
          },
          {
            "code": "511525",
            "name": "高县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.519187,
            "children": []
          },
          {
            "code": "511526",
            "name": "珙县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.712268,
            "children": []
          },
          {
            "code": "511527",
            "name": "筠连县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.507848,
            "children": []
          },
          {
            "code": "511528",
            "name": "兴文县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 105.236549,
            "children": []
          },
          {
            "code": "511529",
            "name": "屏山县",
            "level": "district",
            "parentCode": "511500",
            "longitude": 104.162617,
            "children": []
          }
        ]
      },
      {
        "code": "511600",
        "name": "广安市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 106.633369,
        "children": [
          {
            "code": "511602",
            "name": "广安区",
            "level": "district",
            "parentCode": "511600",
            "longitude": 106.632907,
            "children": []
          },
          {
            "code": "511603",
            "name": "前锋区",
            "level": "district",
            "parentCode": "511600",
            "longitude": 106.893277,
            "children": []
          },
          {
            "code": "511621",
            "name": "岳池县",
            "level": "district",
            "parentCode": "511600",
            "longitude": 106.444451,
            "children": []
          },
          {
            "code": "511622",
            "name": "武胜县",
            "level": "district",
            "parentCode": "511600",
            "longitude": 106.292473,
            "children": []
          },
          {
            "code": "511623",
            "name": "邻水县",
            "level": "district",
            "parentCode": "511600",
            "longitude": 106.934968,
            "children": []
          },
          {
            "code": "511681",
            "name": "华蓥市",
            "level": "district",
            "parentCode": "511600",
            "longitude": 106.777882,
            "children": []
          }
        ]
      },
      {
        "code": "511700",
        "name": "达州市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 107.502262,
        "children": [
          {
            "code": "511702",
            "name": "通川区",
            "level": "district",
            "parentCode": "511700",
            "longitude": 107.501062,
            "children": []
          },
          {
            "code": "511703",
            "name": "达川区",
            "level": "district",
            "parentCode": "511700",
            "longitude": 107.507926,
            "children": []
          },
          {
            "code": "511722",
            "name": "宣汉县",
            "level": "district",
            "parentCode": "511700",
            "longitude": 107.722254,
            "children": []
          },
          {
            "code": "511723",
            "name": "开江县",
            "level": "district",
            "parentCode": "511700",
            "longitude": 107.864135,
            "children": []
          },
          {
            "code": "511724",
            "name": "大竹县",
            "level": "district",
            "parentCode": "511700",
            "longitude": 107.20742,
            "children": []
          },
          {
            "code": "511725",
            "name": "渠县",
            "level": "district",
            "parentCode": "511700",
            "longitude": 106.970746,
            "children": []
          },
          {
            "code": "511781",
            "name": "万源市",
            "level": "district",
            "parentCode": "511700",
            "longitude": 108.037548,
            "children": []
          }
        ]
      },
      {
        "code": "511800",
        "name": "雅安市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 103.001033,
        "children": [
          {
            "code": "511802",
            "name": "雨城区",
            "level": "district",
            "parentCode": "511800",
            "longitude": 103.003398,
            "children": []
          },
          {
            "code": "511803",
            "name": "名山区",
            "level": "district",
            "parentCode": "511800",
            "longitude": 103.112214,
            "children": []
          },
          {
            "code": "511822",
            "name": "荥经县",
            "level": "district",
            "parentCode": "511800",
            "longitude": 102.844674,
            "children": []
          },
          {
            "code": "511823",
            "name": "汉源县",
            "level": "district",
            "parentCode": "511800",
            "longitude": 102.677145,
            "children": []
          },
          {
            "code": "511824",
            "name": "石棉县",
            "level": "district",
            "parentCode": "511800",
            "longitude": 102.35962,
            "children": []
          },
          {
            "code": "511825",
            "name": "天全县",
            "level": "district",
            "parentCode": "511800",
            "longitude": 102.763462,
            "children": []
          },
          {
            "code": "511826",
            "name": "芦山县",
            "level": "district",
            "parentCode": "511800",
            "longitude": 102.924016,
            "children": []
          },
          {
            "code": "511827",
            "name": "宝兴县",
            "level": "district",
            "parentCode": "511800",
            "longitude": 102.813377,
            "children": []
          }
        ]
      },
      {
        "code": "511900",
        "name": "巴中市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 106.753669,
        "children": [
          {
            "code": "511902",
            "name": "巴州区",
            "level": "district",
            "parentCode": "511900",
            "longitude": 106.753671,
            "children": []
          },
          {
            "code": "511903",
            "name": "恩阳区",
            "level": "district",
            "parentCode": "511900",
            "longitude": 106.486515,
            "children": []
          },
          {
            "code": "511921",
            "name": "通江县",
            "level": "district",
            "parentCode": "511900",
            "longitude": 107.247621,
            "children": []
          },
          {
            "code": "511922",
            "name": "南江县",
            "level": "district",
            "parentCode": "511900",
            "longitude": 106.843418,
            "children": []
          },
          {
            "code": "511923",
            "name": "平昌县",
            "level": "district",
            "parentCode": "511900",
            "longitude": 107.101937,
            "children": []
          }
        ]
      },
      {
        "code": "512000",
        "name": "资阳市",
        "level": "city",
        "parentCode": "510000",
        "longitude": 104.641917,
        "children": [
          {
            "code": "512002",
            "name": "雁江区",
            "level": "district",
            "parentCode": "512000",
            "longitude": 104.642338,
            "children": []
          },
          {
            "code": "512021",
            "name": "安岳县",
            "level": "district",
            "parentCode": "512000",
            "longitude": 105.336764,
            "children": []
          },
          {
            "code": "512022",
            "name": "乐至县",
            "level": "district",
            "parentCode": "512000",
            "longitude": 105.031142,
            "children": []
          }
        ]
      },
      {
        "code": "513200",
        "name": "阿坝藏族羌族自治州",
        "level": "city",
        "parentCode": "510000",
        "longitude": 102.221374,
        "children": [
          {
            "code": "513201",
            "name": "马尔康市",
            "level": "district",
            "parentCode": "513200",
            "longitude": 102.221187,
            "children": []
          },
          {
            "code": "513221",
            "name": "汶川县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 103.580675,
            "children": []
          },
          {
            "code": "513222",
            "name": "理县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 103.165486,
            "children": []
          },
          {
            "code": "513223",
            "name": "茂县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 103.850684,
            "children": []
          },
          {
            "code": "513224",
            "name": "松潘县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 103.599177,
            "children": []
          },
          {
            "code": "513225",
            "name": "九寨沟县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 104.236344,
            "children": []
          },
          {
            "code": "513226",
            "name": "金川县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 102.064647,
            "children": []
          },
          {
            "code": "513227",
            "name": "小金县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 102.363193,
            "children": []
          },
          {
            "code": "513228",
            "name": "黑水县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 102.990805,
            "children": []
          },
          {
            "code": "513230",
            "name": "壤塘县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 100.979136,
            "children": []
          },
          {
            "code": "513231",
            "name": "阿坝县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 101.700985,
            "children": []
          },
          {
            "code": "513232",
            "name": "若尔盖县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 102.963726,
            "children": []
          },
          {
            "code": "513233",
            "name": "红原县",
            "level": "district",
            "parentCode": "513200",
            "longitude": 102.544906,
            "children": []
          }
        ]
      },
      {
        "code": "513300",
        "name": "甘孜藏族自治州",
        "level": "city",
        "parentCode": "510000",
        "longitude": 101.963815,
        "children": [
          {
            "code": "513301",
            "name": "康定市",
            "level": "district",
            "parentCode": "513300",
            "longitude": 101.964057,
            "children": []
          },
          {
            "code": "513322",
            "name": "泸定县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 102.233225,
            "children": []
          },
          {
            "code": "513323",
            "name": "丹巴县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 101.886125,
            "children": []
          },
          {
            "code": "513324",
            "name": "九龙县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 101.506942,
            "children": []
          },
          {
            "code": "513325",
            "name": "雅江县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 101.015735,
            "children": []
          },
          {
            "code": "513326",
            "name": "道孚县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 101.123327,
            "children": []
          },
          {
            "code": "513327",
            "name": "炉霍县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 100.679495,
            "children": []
          },
          {
            "code": "513328",
            "name": "甘孜县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 99.991753,
            "children": []
          },
          {
            "code": "513329",
            "name": "新龙县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 100.312094,
            "children": []
          },
          {
            "code": "513330",
            "name": "德格县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 98.57999,
            "children": []
          },
          {
            "code": "513331",
            "name": "白玉县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 98.824343,
            "children": []
          },
          {
            "code": "513332",
            "name": "石渠县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 98.100887,
            "children": []
          },
          {
            "code": "513333",
            "name": "色达县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 100.331657,
            "children": []
          },
          {
            "code": "513334",
            "name": "理塘县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 100.269862,
            "children": []
          },
          {
            "code": "513335",
            "name": "巴塘县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 99.109037,
            "children": []
          },
          {
            "code": "513336",
            "name": "乡城县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 99.799943,
            "children": []
          },
          {
            "code": "513337",
            "name": "稻城县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 100.296689,
            "children": []
          },
          {
            "code": "513338",
            "name": "得荣县",
            "level": "district",
            "parentCode": "513300",
            "longitude": 99.288036,
            "children": []
          }
        ]
      },
      {
        "code": "513400",
        "name": "凉山彝族自治州",
        "level": "city",
        "parentCode": "510000",
        "longitude": 102.258746,
        "children": [
          {
            "code": "513401",
            "name": "西昌市",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.258758,
            "children": []
          },
          {
            "code": "513422",
            "name": "木里藏族自治县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 101.280184,
            "children": []
          },
          {
            "code": "513423",
            "name": "盐源县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 101.508909,
            "children": []
          },
          {
            "code": "513424",
            "name": "德昌县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.178845,
            "children": []
          },
          {
            "code": "513425",
            "name": "会理市",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.249548,
            "children": []
          },
          {
            "code": "513426",
            "name": "会东县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.578985,
            "children": []
          },
          {
            "code": "513427",
            "name": "宁南县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.757374,
            "children": []
          },
          {
            "code": "513428",
            "name": "普格县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.541082,
            "children": []
          },
          {
            "code": "513429",
            "name": "布拖县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.808801,
            "children": []
          },
          {
            "code": "513430",
            "name": "金阳县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 103.248704,
            "children": []
          },
          {
            "code": "513431",
            "name": "昭觉县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.843991,
            "children": []
          },
          {
            "code": "513432",
            "name": "喜德县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.412342,
            "children": []
          },
          {
            "code": "513433",
            "name": "冕宁县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.170046,
            "children": []
          },
          {
            "code": "513434",
            "name": "越西县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.508875,
            "children": []
          },
          {
            "code": "513435",
            "name": "甘洛县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 102.775924,
            "children": []
          },
          {
            "code": "513436",
            "name": "美姑县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 103.132007,
            "children": []
          },
          {
            "code": "513437",
            "name": "雷波县",
            "level": "district",
            "parentCode": "513400",
            "longitude": 103.571584,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "520000",
    "name": "贵州省",
    "level": "province",
    "longitude": 106.713478,
    "children": [
      {
        "code": "520100",
        "name": "贵阳市",
        "level": "city",
        "parentCode": "520000",
        "longitude": 106.713478,
        "children": [
          {
            "code": "520102",
            "name": "南明区",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.715963,
            "children": []
          },
          {
            "code": "520103",
            "name": "云岩区",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.713397,
            "children": []
          },
          {
            "code": "520111",
            "name": "花溪区",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.670791,
            "children": []
          },
          {
            "code": "520112",
            "name": "乌当区",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.762123,
            "children": []
          },
          {
            "code": "520113",
            "name": "白云区",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.633037,
            "children": []
          },
          {
            "code": "520115",
            "name": "观山湖区",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.626323,
            "children": []
          },
          {
            "code": "520121",
            "name": "开阳县",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.969438,
            "children": []
          },
          {
            "code": "520122",
            "name": "息烽县",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.737693,
            "children": []
          },
          {
            "code": "520123",
            "name": "修文县",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.599218,
            "children": []
          },
          {
            "code": "520181",
            "name": "清镇市",
            "level": "district",
            "parentCode": "520100",
            "longitude": 106.470278,
            "children": []
          }
        ]
      },
      {
        "code": "520200",
        "name": "六盘水市",
        "level": "city",
        "parentCode": "520000",
        "longitude": 104.846743,
        "children": [
          {
            "code": "520201",
            "name": "钟山区",
            "level": "district",
            "parentCode": "520200",
            "longitude": 104.846244,
            "children": []
          },
          {
            "code": "520203",
            "name": "六枝特区",
            "level": "district",
            "parentCode": "520200",
            "longitude": 105.474235,
            "children": []
          },
          {
            "code": "520221",
            "name": "水城区",
            "level": "district",
            "parentCode": "520200",
            "longitude": 104.95685,
            "children": []
          },
          {
            "code": "520281",
            "name": "盘州市",
            "level": "district",
            "parentCode": "520200",
            "longitude": 104.468367,
            "children": []
          }
        ]
      },
      {
        "code": "520300",
        "name": "遵义市",
        "level": "city",
        "parentCode": "520000",
        "longitude": 106.937265,
        "children": [
          {
            "code": "520302",
            "name": "红花岗区",
            "level": "district",
            "parentCode": "520300",
            "longitude": 106.943784,
            "children": []
          },
          {
            "code": "520303",
            "name": "汇川区",
            "level": "district",
            "parentCode": "520300",
            "longitude": 106.937265,
            "children": []
          },
          {
            "code": "520304",
            "name": "播州区",
            "level": "district",
            "parentCode": "520300",
            "longitude": 106.831668,
            "children": []
          },
          {
            "code": "520322",
            "name": "桐梓县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 106.826591,
            "children": []
          },
          {
            "code": "520323",
            "name": "绥阳县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.191024,
            "children": []
          },
          {
            "code": "520324",
            "name": "正安县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.441872,
            "children": []
          },
          {
            "code": "520325",
            "name": "道真仡佬族苗族自治县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.605342,
            "children": []
          },
          {
            "code": "520326",
            "name": "务川仡佬族苗族自治县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.887857,
            "children": []
          },
          {
            "code": "520327",
            "name": "凤冈县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.722021,
            "children": []
          },
          {
            "code": "520328",
            "name": "湄潭县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.485723,
            "children": []
          },
          {
            "code": "520329",
            "name": "余庆县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 107.892566,
            "children": []
          },
          {
            "code": "520330",
            "name": "习水县",
            "level": "district",
            "parentCode": "520300",
            "longitude": 106.200954,
            "children": []
          },
          {
            "code": "520381",
            "name": "赤水市",
            "level": "district",
            "parentCode": "520300",
            "longitude": 105.698116,
            "children": []
          },
          {
            "code": "520382",
            "name": "仁怀市",
            "level": "district",
            "parentCode": "520300",
            "longitude": 106.412476,
            "children": []
          }
        ]
      },
      {
        "code": "520400",
        "name": "安顺市",
        "level": "city",
        "parentCode": "520000",
        "longitude": 105.932188,
        "children": [
          {
            "code": "520402",
            "name": "西秀区",
            "level": "district",
            "parentCode": "520400",
            "longitude": 105.946169,
            "children": []
          },
          {
            "code": "520403",
            "name": "平坝区",
            "level": "district",
            "parentCode": "520400",
            "longitude": 106.259942,
            "children": []
          },
          {
            "code": "520422",
            "name": "普定县",
            "level": "district",
            "parentCode": "520400",
            "longitude": 105.745609,
            "children": []
          },
          {
            "code": "520423",
            "name": "镇宁布依族苗族自治县",
            "level": "district",
            "parentCode": "520400",
            "longitude": 105.768656,
            "children": []
          },
          {
            "code": "520424",
            "name": "关岭布依族苗族自治县",
            "level": "district",
            "parentCode": "520400",
            "longitude": 105.618454,
            "children": []
          },
          {
            "code": "520425",
            "name": "紫云苗族布依族自治县",
            "level": "district",
            "parentCode": "520400",
            "longitude": 106.084515,
            "children": []
          }
        ]
      },
      {
        "code": "520500",
        "name": "毕节市",
        "level": "city",
        "parentCode": "520000",
        "longitude": 105.28501,
        "children": [
          {
            "code": "520502",
            "name": "七星关区",
            "level": "district",
            "parentCode": "520500",
            "longitude": 105.284852,
            "children": []
          },
          {
            "code": "520521",
            "name": "大方县",
            "level": "district",
            "parentCode": "520500",
            "longitude": 105.609254,
            "children": []
          },
          {
            "code": "520522",
            "name": "黔西市",
            "level": "district",
            "parentCode": "520500",
            "longitude": 106.038299,
            "children": []
          },
          {
            "code": "520523",
            "name": "金沙县",
            "level": "district",
            "parentCode": "520500",
            "longitude": 106.222103,
            "children": []
          },
          {
            "code": "520524",
            "name": "织金县",
            "level": "district",
            "parentCode": "520500",
            "longitude": 105.768997,
            "children": []
          },
          {
            "code": "520525",
            "name": "纳雍县",
            "level": "district",
            "parentCode": "520500",
            "longitude": 105.375322,
            "children": []
          },
          {
            "code": "520526",
            "name": "威宁彝族回族苗族自治县",
            "level": "district",
            "parentCode": "520500",
            "longitude": 104.286523,
            "children": []
          },
          {
            "code": "520527",
            "name": "赫章县",
            "level": "district",
            "parentCode": "520500",
            "longitude": 104.726438,
            "children": []
          }
        ]
      },
      {
        "code": "520600",
        "name": "铜仁市",
        "level": "city",
        "parentCode": "520000",
        "longitude": 109.191555,
        "children": [
          {
            "code": "520602",
            "name": "碧江区",
            "level": "district",
            "parentCode": "520600",
            "longitude": 109.192117,
            "children": []
          },
          {
            "code": "520603",
            "name": "万山区",
            "level": "district",
            "parentCode": "520600",
            "longitude": 109.21199,
            "children": []
          },
          {
            "code": "520621",
            "name": "江口县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.848427,
            "children": []
          },
          {
            "code": "520622",
            "name": "玉屏侗族自治县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.917882,
            "children": []
          },
          {
            "code": "520623",
            "name": "石阡县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.229854,
            "children": []
          },
          {
            "code": "520624",
            "name": "思南县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.255827,
            "children": []
          },
          {
            "code": "520625",
            "name": "印江土家族苗族自治县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.405517,
            "children": []
          },
          {
            "code": "520626",
            "name": "德江县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.117317,
            "children": []
          },
          {
            "code": "520627",
            "name": "沿河土家族自治县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 108.495746,
            "children": []
          },
          {
            "code": "520628",
            "name": "松桃苗族自治县",
            "level": "district",
            "parentCode": "520600",
            "longitude": 109.202627,
            "children": []
          }
        ]
      },
      {
        "code": "522300",
        "name": "黔西南布依族苗族自治州",
        "level": "city",
        "parentCode": "520000",
        "longitude": 104.897971,
        "children": [
          {
            "code": "522301",
            "name": "兴义市",
            "level": "district",
            "parentCode": "522300",
            "longitude": 104.897982,
            "children": []
          },
          {
            "code": "522302",
            "name": "兴仁市",
            "level": "district",
            "parentCode": "522300",
            "longitude": 105.192778,
            "children": []
          },
          {
            "code": "522323",
            "name": "普安县",
            "level": "district",
            "parentCode": "522300",
            "longitude": 104.955347,
            "children": []
          },
          {
            "code": "522324",
            "name": "晴隆县",
            "level": "district",
            "parentCode": "522300",
            "longitude": 105.218773,
            "children": []
          },
          {
            "code": "522325",
            "name": "贞丰县",
            "level": "district",
            "parentCode": "522300",
            "longitude": 105.650133,
            "children": []
          },
          {
            "code": "522326",
            "name": "望谟县",
            "level": "district",
            "parentCode": "522300",
            "longitude": 106.091563,
            "children": []
          },
          {
            "code": "522327",
            "name": "册亨县",
            "level": "district",
            "parentCode": "522300",
            "longitude": 105.81241,
            "children": []
          },
          {
            "code": "522328",
            "name": "安龙县",
            "level": "district",
            "parentCode": "522300",
            "longitude": 105.471498,
            "children": []
          }
        ]
      },
      {
        "code": "522600",
        "name": "黔东南苗族侗族自治州",
        "level": "city",
        "parentCode": "520000",
        "longitude": 107.977488,
        "children": [
          {
            "code": "522601",
            "name": "凯里市",
            "level": "district",
            "parentCode": "522600",
            "longitude": 107.977541,
            "children": []
          },
          {
            "code": "522622",
            "name": "黄平县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 107.901337,
            "children": []
          },
          {
            "code": "522623",
            "name": "施秉县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.12678,
            "children": []
          },
          {
            "code": "522624",
            "name": "三穗县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.681121,
            "children": []
          },
          {
            "code": "522625",
            "name": "镇远县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.423656,
            "children": []
          },
          {
            "code": "522626",
            "name": "岑巩县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.816459,
            "children": []
          },
          {
            "code": "522627",
            "name": "天柱县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 109.212798,
            "children": []
          },
          {
            "code": "522628",
            "name": "锦屏县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 109.20252,
            "children": []
          },
          {
            "code": "522629",
            "name": "剑河县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.440499,
            "children": []
          },
          {
            "code": "522630",
            "name": "台江县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.314637,
            "children": []
          },
          {
            "code": "522631",
            "name": "黎平县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 109.136504,
            "children": []
          },
          {
            "code": "522632",
            "name": "榕江县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.521026,
            "children": []
          },
          {
            "code": "522633",
            "name": "从江县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.912648,
            "children": []
          },
          {
            "code": "522634",
            "name": "雷山县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 108.079613,
            "children": []
          },
          {
            "code": "522635",
            "name": "麻江县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 107.593172,
            "children": []
          },
          {
            "code": "522636",
            "name": "丹寨县",
            "level": "district",
            "parentCode": "522600",
            "longitude": 107.794808,
            "children": []
          }
        ]
      },
      {
        "code": "522700",
        "name": "黔南布依族苗族自治州",
        "level": "city",
        "parentCode": "520000",
        "longitude": 107.517156,
        "children": [
          {
            "code": "522701",
            "name": "都匀市",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.517021,
            "children": []
          },
          {
            "code": "522702",
            "name": "福泉市",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.513508,
            "children": []
          },
          {
            "code": "522722",
            "name": "荔波县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.8838,
            "children": []
          },
          {
            "code": "522723",
            "name": "贵定县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.233588,
            "children": []
          },
          {
            "code": "522725",
            "name": "瓮安县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.478417,
            "children": []
          },
          {
            "code": "522726",
            "name": "独山县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.542757,
            "children": []
          },
          {
            "code": "522727",
            "name": "平塘县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.32405,
            "children": []
          },
          {
            "code": "522728",
            "name": "罗甸县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 106.750006,
            "children": []
          },
          {
            "code": "522729",
            "name": "长顺县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 106.447376,
            "children": []
          },
          {
            "code": "522730",
            "name": "龙里县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 106.977733,
            "children": []
          },
          {
            "code": "522731",
            "name": "惠水县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 106.657848,
            "children": []
          },
          {
            "code": "522732",
            "name": "三都水族自治县",
            "level": "district",
            "parentCode": "522700",
            "longitude": 107.87747,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "530000",
    "name": "云南省",
    "level": "province",
    "longitude": 102.712251,
    "children": [
      {
        "code": "530100",
        "name": "昆明市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 102.712251,
        "children": [
          {
            "code": "530102",
            "name": "五华区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.704412,
            "children": []
          },
          {
            "code": "530103",
            "name": "盘龙区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.729044,
            "children": []
          },
          {
            "code": "530111",
            "name": "官渡区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.723437,
            "children": []
          },
          {
            "code": "530112",
            "name": "西山区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.705904,
            "children": []
          },
          {
            "code": "530113",
            "name": "东川区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 103.182,
            "children": []
          },
          {
            "code": "530114",
            "name": "呈贡区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.801382,
            "children": []
          },
          {
            "code": "530115",
            "name": "晋宁区",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.594987,
            "children": []
          },
          {
            "code": "530124",
            "name": "富民县",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.497888,
            "children": []
          },
          {
            "code": "530125",
            "name": "宜良县",
            "level": "district",
            "parentCode": "530100",
            "longitude": 103.145989,
            "children": []
          },
          {
            "code": "530126",
            "name": "石林彝族自治县",
            "level": "district",
            "parentCode": "530100",
            "longitude": 103.271962,
            "children": []
          },
          {
            "code": "530127",
            "name": "嵩明县",
            "level": "district",
            "parentCode": "530100",
            "longitude": 103.038777,
            "children": []
          },
          {
            "code": "530128",
            "name": "禄劝彝族苗族自治县",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.46905,
            "children": []
          },
          {
            "code": "530129",
            "name": "寻甸回族彝族自治县",
            "level": "district",
            "parentCode": "530100",
            "longitude": 103.257588,
            "children": []
          },
          {
            "code": "530181",
            "name": "安宁市",
            "level": "district",
            "parentCode": "530100",
            "longitude": 102.485544,
            "children": []
          }
        ]
      },
      {
        "code": "530300",
        "name": "曲靖市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 103.797851,
        "children": [
          {
            "code": "530302",
            "name": "麒麟区",
            "level": "district",
            "parentCode": "530300",
            "longitude": 103.798054,
            "children": []
          },
          {
            "code": "530303",
            "name": "沾益区",
            "level": "district",
            "parentCode": "530300",
            "longitude": 103.819262,
            "children": []
          },
          {
            "code": "530304",
            "name": "马龙区",
            "level": "district",
            "parentCode": "530300",
            "longitude": 103.578755,
            "children": []
          },
          {
            "code": "530322",
            "name": "陆良县",
            "level": "district",
            "parentCode": "530300",
            "longitude": 103.655233,
            "children": []
          },
          {
            "code": "530323",
            "name": "师宗县",
            "level": "district",
            "parentCode": "530300",
            "longitude": 103.993808,
            "children": []
          },
          {
            "code": "530324",
            "name": "罗平县",
            "level": "district",
            "parentCode": "530300",
            "longitude": 104.309263,
            "children": []
          },
          {
            "code": "530325",
            "name": "富源县",
            "level": "district",
            "parentCode": "530300",
            "longitude": 104.25692,
            "children": []
          },
          {
            "code": "530326",
            "name": "会泽县",
            "level": "district",
            "parentCode": "530300",
            "longitude": 103.300041,
            "children": []
          },
          {
            "code": "530381",
            "name": "宣威市",
            "level": "district",
            "parentCode": "530300",
            "longitude": 104.09554,
            "children": []
          }
        ]
      },
      {
        "code": "530400",
        "name": "玉溪市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 102.543907,
        "children": [
          {
            "code": "530402",
            "name": "红塔区",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.543468,
            "children": []
          },
          {
            "code": "530403",
            "name": "江川区",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.749839,
            "children": []
          },
          {
            "code": "530423",
            "name": "通海县",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.760039,
            "children": []
          },
          {
            "code": "530424",
            "name": "华宁县",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.928982,
            "children": []
          },
          {
            "code": "530425",
            "name": "易门县",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.16211,
            "children": []
          },
          {
            "code": "530426",
            "name": "峨山彝族自治县",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.404358,
            "children": []
          },
          {
            "code": "530427",
            "name": "新平彝族傣族自治县",
            "level": "district",
            "parentCode": "530400",
            "longitude": 101.990903,
            "children": []
          },
          {
            "code": "530428",
            "name": "元江哈尼族彝族傣族自治县",
            "level": "district",
            "parentCode": "530400",
            "longitude": 101.999658,
            "children": []
          },
          {
            "code": "530481",
            "name": "澄江市",
            "level": "district",
            "parentCode": "530400",
            "longitude": 102.916652,
            "children": []
          }
        ]
      },
      {
        "code": "530500",
        "name": "保山市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 99.167133,
        "children": [
          {
            "code": "530502",
            "name": "隆阳区",
            "level": "district",
            "parentCode": "530500",
            "longitude": 99.165825,
            "children": []
          },
          {
            "code": "530521",
            "name": "施甸县",
            "level": "district",
            "parentCode": "530500",
            "longitude": 99.183758,
            "children": []
          },
          {
            "code": "530523",
            "name": "龙陵县",
            "level": "district",
            "parentCode": "530500",
            "longitude": 98.693567,
            "children": []
          },
          {
            "code": "530524",
            "name": "昌宁县",
            "level": "district",
            "parentCode": "530500",
            "longitude": 99.612344,
            "children": []
          },
          {
            "code": "530581",
            "name": "腾冲市",
            "level": "district",
            "parentCode": "530500",
            "longitude": 98.497292,
            "children": []
          }
        ]
      },
      {
        "code": "530600",
        "name": "昭通市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 103.717216,
        "children": [
          {
            "code": "530602",
            "name": "昭阳区",
            "level": "district",
            "parentCode": "530600",
            "longitude": 103.717267,
            "children": []
          },
          {
            "code": "530621",
            "name": "鲁甸县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 103.549333,
            "children": []
          },
          {
            "code": "530622",
            "name": "巧家县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 102.929284,
            "children": []
          },
          {
            "code": "530623",
            "name": "盐津县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 104.23506,
            "children": []
          },
          {
            "code": "530624",
            "name": "大关县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 103.891608,
            "children": []
          },
          {
            "code": "530625",
            "name": "永善县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 103.63732,
            "children": []
          },
          {
            "code": "530626",
            "name": "绥江县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 103.961095,
            "children": []
          },
          {
            "code": "530627",
            "name": "镇雄县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 104.873055,
            "children": []
          },
          {
            "code": "530628",
            "name": "彝良县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 104.048492,
            "children": []
          },
          {
            "code": "530629",
            "name": "威信县",
            "level": "district",
            "parentCode": "530600",
            "longitude": 105.04869,
            "children": []
          },
          {
            "code": "530681",
            "name": "水富市",
            "level": "district",
            "parentCode": "530600",
            "longitude": 104.415376,
            "children": []
          }
        ]
      },
      {
        "code": "530700",
        "name": "丽江市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 100.233026,
        "children": [
          {
            "code": "530702",
            "name": "古城区",
            "level": "district",
            "parentCode": "530700",
            "longitude": 100.234412,
            "children": []
          },
          {
            "code": "530721",
            "name": "玉龙纳西族自治县",
            "level": "district",
            "parentCode": "530700",
            "longitude": 100.238312,
            "children": []
          },
          {
            "code": "530722",
            "name": "永胜县",
            "level": "district",
            "parentCode": "530700",
            "longitude": 100.750901,
            "children": []
          },
          {
            "code": "530723",
            "name": "华坪县",
            "level": "district",
            "parentCode": "530700",
            "longitude": 101.267796,
            "children": []
          },
          {
            "code": "530724",
            "name": "宁蒗彝族自治县",
            "level": "district",
            "parentCode": "530700",
            "longitude": 100.852427,
            "children": []
          }
        ]
      },
      {
        "code": "530800",
        "name": "普洱市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 100.972344,
        "children": [
          {
            "code": "530802",
            "name": "思茅区",
            "level": "district",
            "parentCode": "530800",
            "longitude": 100.973227,
            "children": []
          },
          {
            "code": "530821",
            "name": "宁洱哈尼族彝族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 101.04524,
            "children": []
          },
          {
            "code": "530822",
            "name": "墨江哈尼族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 101.687606,
            "children": []
          },
          {
            "code": "530823",
            "name": "景东彝族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 100.840011,
            "children": []
          },
          {
            "code": "530824",
            "name": "景谷傣族彝族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 100.701425,
            "children": []
          },
          {
            "code": "530825",
            "name": "镇沅彝族哈尼族拉祜族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 101.108512,
            "children": []
          },
          {
            "code": "530826",
            "name": "江城哈尼族彝族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 101.859144,
            "children": []
          },
          {
            "code": "530827",
            "name": "孟连傣族拉祜族佤族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 99.585406,
            "children": []
          },
          {
            "code": "530828",
            "name": "澜沧拉祜族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 99.931201,
            "children": []
          },
          {
            "code": "530829",
            "name": "西盟佤族自治县",
            "level": "district",
            "parentCode": "530800",
            "longitude": 99.594372,
            "children": []
          }
        ]
      },
      {
        "code": "530900",
        "name": "临沧市",
        "level": "city",
        "parentCode": "530000",
        "longitude": 100.08697,
        "children": [
          {
            "code": "530902",
            "name": "临翔区",
            "level": "district",
            "parentCode": "530900",
            "longitude": 100.086486,
            "children": []
          },
          {
            "code": "530921",
            "name": "凤庆县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 99.91871,
            "children": []
          },
          {
            "code": "530922",
            "name": "云县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 100.125637,
            "children": []
          },
          {
            "code": "530923",
            "name": "永德县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 99.253679,
            "children": []
          },
          {
            "code": "530924",
            "name": "镇康县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 98.82743,
            "children": []
          },
          {
            "code": "530925",
            "name": "双江拉祜族佤族布朗族傣族自治县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 99.824419,
            "children": []
          },
          {
            "code": "530926",
            "name": "耿马傣族佤族自治县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 99.402495,
            "children": []
          },
          {
            "code": "530927",
            "name": "沧源佤族自治县",
            "level": "district",
            "parentCode": "530900",
            "longitude": 99.2474,
            "children": []
          }
        ]
      },
      {
        "code": "532300",
        "name": "楚雄彝族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 101.546046,
        "children": [
          {
            "code": "532301",
            "name": "楚雄市",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.546145,
            "children": []
          },
          {
            "code": "532322",
            "name": "双柏县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.63824,
            "children": []
          },
          {
            "code": "532323",
            "name": "牟定县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.543044,
            "children": []
          },
          {
            "code": "532324",
            "name": "南华县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.274991,
            "children": []
          },
          {
            "code": "532325",
            "name": "姚安县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.238399,
            "children": []
          },
          {
            "code": "532326",
            "name": "大姚县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.323602,
            "children": []
          },
          {
            "code": "532327",
            "name": "永仁县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.671175,
            "children": []
          },
          {
            "code": "532328",
            "name": "元谋县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 101.870837,
            "children": []
          },
          {
            "code": "532329",
            "name": "武定县",
            "level": "district",
            "parentCode": "532300",
            "longitude": 102.406785,
            "children": []
          },
          {
            "code": "532331",
            "name": "禄丰市",
            "level": "district",
            "parentCode": "532300",
            "longitude": 102.075694,
            "children": []
          }
        ]
      },
      {
        "code": "532500",
        "name": "红河哈尼族彝族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 103.384182,
        "children": [
          {
            "code": "532501",
            "name": "个旧市",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.154752,
            "children": []
          },
          {
            "code": "532502",
            "name": "开远市",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.258679,
            "children": []
          },
          {
            "code": "532503",
            "name": "蒙自市",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.385005,
            "children": []
          },
          {
            "code": "532504",
            "name": "弥勒市",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.436988,
            "children": []
          },
          {
            "code": "532523",
            "name": "屏边苗族自治县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.687229,
            "children": []
          },
          {
            "code": "532524",
            "name": "建水县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 102.820493,
            "children": []
          },
          {
            "code": "532525",
            "name": "石屏县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 102.484469,
            "children": []
          },
          {
            "code": "532527",
            "name": "泸西县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.759622,
            "children": []
          },
          {
            "code": "532528",
            "name": "元阳县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 102.837056,
            "children": []
          },
          {
            "code": "532529",
            "name": "红河县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 102.42121,
            "children": []
          },
          {
            "code": "532530",
            "name": "金平苗族瑶族傣族自治县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.228359,
            "children": []
          },
          {
            "code": "532531",
            "name": "绿春县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 102.39286,
            "children": []
          },
          {
            "code": "532532",
            "name": "河口瑶族自治县",
            "level": "district",
            "parentCode": "532500",
            "longitude": 103.961593,
            "children": []
          }
        ]
      },
      {
        "code": "532600",
        "name": "文山壮族苗族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 104.24401,
        "children": [
          {
            "code": "532601",
            "name": "文山市",
            "level": "district",
            "parentCode": "532600",
            "longitude": 104.244277,
            "children": []
          },
          {
            "code": "532622",
            "name": "砚山县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 104.343989,
            "children": []
          },
          {
            "code": "532623",
            "name": "西畴县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 104.675711,
            "children": []
          },
          {
            "code": "532624",
            "name": "麻栗坡县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 104.701899,
            "children": []
          },
          {
            "code": "532625",
            "name": "马关县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 104.398619,
            "children": []
          },
          {
            "code": "532626",
            "name": "丘北县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 104.194366,
            "children": []
          },
          {
            "code": "532627",
            "name": "广南县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 105.056684,
            "children": []
          },
          {
            "code": "532628",
            "name": "富宁县",
            "level": "district",
            "parentCode": "532600",
            "longitude": 105.62856,
            "children": []
          }
        ]
      },
      {
        "code": "532800",
        "name": "西双版纳傣族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 100.797941,
        "children": [
          {
            "code": "532801",
            "name": "景洪市",
            "level": "district",
            "parentCode": "532800",
            "longitude": 100.797947,
            "children": []
          },
          {
            "code": "532822",
            "name": "勐海县",
            "level": "district",
            "parentCode": "532800",
            "longitude": 100.448288,
            "children": []
          },
          {
            "code": "532823",
            "name": "勐腊县",
            "level": "district",
            "parentCode": "532800",
            "longitude": 101.567051,
            "children": []
          }
        ]
      },
      {
        "code": "532900",
        "name": "大理白族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 100.225668,
        "children": [
          {
            "code": "532901",
            "name": "大理市",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.241369,
            "children": []
          },
          {
            "code": "532922",
            "name": "漾濞彝族自治县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 99.95797,
            "children": []
          },
          {
            "code": "532923",
            "name": "祥云县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.554025,
            "children": []
          },
          {
            "code": "532924",
            "name": "宾川县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.578957,
            "children": []
          },
          {
            "code": "532925",
            "name": "弥渡县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.490669,
            "children": []
          },
          {
            "code": "532926",
            "name": "南涧彝族自治县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.518683,
            "children": []
          },
          {
            "code": "532927",
            "name": "巍山彝族回族自治县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.30793,
            "children": []
          },
          {
            "code": "532928",
            "name": "永平县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 99.533536,
            "children": []
          },
          {
            "code": "532929",
            "name": "云龙县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 99.369402,
            "children": []
          },
          {
            "code": "532930",
            "name": "洱源县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 99.951708,
            "children": []
          },
          {
            "code": "532931",
            "name": "剑川县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 99.905887,
            "children": []
          },
          {
            "code": "532932",
            "name": "鹤庆县",
            "level": "district",
            "parentCode": "532900",
            "longitude": 100.173375,
            "children": []
          }
        ]
      },
      {
        "code": "533100",
        "name": "德宏傣族景颇族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 98.578363,
        "children": [
          {
            "code": "533102",
            "name": "瑞丽市",
            "level": "district",
            "parentCode": "533100",
            "longitude": 97.855883,
            "children": []
          },
          {
            "code": "533103",
            "name": "芒市",
            "level": "district",
            "parentCode": "533100",
            "longitude": 98.577608,
            "children": []
          },
          {
            "code": "533122",
            "name": "梁河县",
            "level": "district",
            "parentCode": "533100",
            "longitude": 98.298196,
            "children": []
          },
          {
            "code": "533123",
            "name": "盈江县",
            "level": "district",
            "parentCode": "533100",
            "longitude": 97.93393,
            "children": []
          },
          {
            "code": "533124",
            "name": "陇川县",
            "level": "district",
            "parentCode": "533100",
            "longitude": 97.794441,
            "children": []
          }
        ]
      },
      {
        "code": "533300",
        "name": "怒江傈僳族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 98.854304,
        "children": [
          {
            "code": "533301",
            "name": "泸水市",
            "level": "district",
            "parentCode": "533300",
            "longitude": 98.854063,
            "children": []
          },
          {
            "code": "533323",
            "name": "福贡县",
            "level": "district",
            "parentCode": "533300",
            "longitude": 98.867413,
            "children": []
          },
          {
            "code": "533324",
            "name": "贡山独龙族怒族自治县",
            "level": "district",
            "parentCode": "533300",
            "longitude": 98.666141,
            "children": []
          },
          {
            "code": "533325",
            "name": "兰坪白族普米族自治县",
            "level": "district",
            "parentCode": "533300",
            "longitude": 99.421378,
            "children": []
          }
        ]
      },
      {
        "code": "533400",
        "name": "迪庆藏族自治州",
        "level": "city",
        "parentCode": "530000",
        "longitude": 99.706463,
        "children": [
          {
            "code": "533401",
            "name": "香格里拉市",
            "level": "district",
            "parentCode": "533400",
            "longitude": 99.708667,
            "children": []
          },
          {
            "code": "533422",
            "name": "德钦县",
            "level": "district",
            "parentCode": "533400",
            "longitude": 98.91506,
            "children": []
          },
          {
            "code": "533423",
            "name": "维西傈僳族自治县",
            "level": "district",
            "parentCode": "533400",
            "longitude": 99.286355,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "540000",
    "name": "西藏自治区",
    "level": "province",
    "longitude": 91.132212,
    "children": [
      {
        "code": "540100",
        "name": "拉萨市",
        "level": "city",
        "parentCode": "540000",
        "longitude": 91.132212,
        "children": [
          {
            "code": "540102",
            "name": "城关区",
            "level": "district",
            "parentCode": "540100",
            "longitude": 91.132911,
            "children": []
          },
          {
            "code": "540103",
            "name": "堆龙德庆区",
            "level": "district",
            "parentCode": "540100",
            "longitude": 91.002823,
            "children": []
          },
          {
            "code": "540104",
            "name": "达孜区",
            "level": "district",
            "parentCode": "540100",
            "longitude": 91.350976,
            "children": []
          },
          {
            "code": "540121",
            "name": "林周县",
            "level": "district",
            "parentCode": "540100",
            "longitude": 91.261842,
            "children": []
          },
          {
            "code": "540122",
            "name": "当雄县",
            "level": "district",
            "parentCode": "540100",
            "longitude": 91.103551,
            "children": []
          },
          {
            "code": "540123",
            "name": "尼木县",
            "level": "district",
            "parentCode": "540100",
            "longitude": 90.165545,
            "children": []
          },
          {
            "code": "540124",
            "name": "曲水县",
            "level": "district",
            "parentCode": "540100",
            "longitude": 90.738051,
            "children": []
          },
          {
            "code": "540127",
            "name": "墨竹工卡县",
            "level": "district",
            "parentCode": "540100",
            "longitude": 91.731158,
            "children": []
          }
        ]
      },
      {
        "code": "540200",
        "name": "日喀则市",
        "level": "city",
        "parentCode": "540000",
        "longitude": 88.885148,
        "children": [
          {
            "code": "540202",
            "name": "桑珠孜区",
            "level": "district",
            "parentCode": "540200",
            "longitude": 88.88667,
            "children": []
          },
          {
            "code": "540221",
            "name": "南木林县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 89.099434,
            "children": []
          },
          {
            "code": "540222",
            "name": "江孜县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 89.605044,
            "children": []
          },
          {
            "code": "540223",
            "name": "定日县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 87.123887,
            "children": []
          },
          {
            "code": "540224",
            "name": "萨迦县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 88.023007,
            "children": []
          },
          {
            "code": "540225",
            "name": "拉孜县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 87.63743,
            "children": []
          },
          {
            "code": "540226",
            "name": "昂仁县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 87.23578,
            "children": []
          },
          {
            "code": "540227",
            "name": "谢通门县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 88.260517,
            "children": []
          },
          {
            "code": "540228",
            "name": "白朗县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 89.263618,
            "children": []
          },
          {
            "code": "540229",
            "name": "仁布县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 89.843207,
            "children": []
          },
          {
            "code": "540230",
            "name": "康马县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 89.683406,
            "children": []
          },
          {
            "code": "540231",
            "name": "定结县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 87.767723,
            "children": []
          },
          {
            "code": "540232",
            "name": "仲巴县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 84.032826,
            "children": []
          },
          {
            "code": "540233",
            "name": "亚东县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 88.906806,
            "children": []
          },
          {
            "code": "540234",
            "name": "吉隆县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 85.298349,
            "children": []
          },
          {
            "code": "540235",
            "name": "聂拉木县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 85.981953,
            "children": []
          },
          {
            "code": "540236",
            "name": "萨嘎县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 85.234622,
            "children": []
          },
          {
            "code": "540237",
            "name": "岗巴县",
            "level": "district",
            "parentCode": "540200",
            "longitude": 88.518903,
            "children": []
          }
        ]
      },
      {
        "code": "540300",
        "name": "昌都市",
        "level": "city",
        "parentCode": "540000",
        "longitude": 97.178452,
        "children": [
          {
            "code": "540302",
            "name": "卡若区",
            "level": "district",
            "parentCode": "540300",
            "longitude": 97.178255,
            "children": []
          },
          {
            "code": "540321",
            "name": "江达县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 98.218351,
            "children": []
          },
          {
            "code": "540322",
            "name": "贡觉县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 98.271191,
            "children": []
          },
          {
            "code": "540323",
            "name": "类乌齐县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 96.601259,
            "children": []
          },
          {
            "code": "540324",
            "name": "丁青县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 95.597748,
            "children": []
          },
          {
            "code": "540325",
            "name": "察雅县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 97.565701,
            "children": []
          },
          {
            "code": "540326",
            "name": "八宿县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 96.917893,
            "children": []
          },
          {
            "code": "540327",
            "name": "左贡县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 97.840532,
            "children": []
          },
          {
            "code": "540328",
            "name": "芒康县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 98.596444,
            "children": []
          },
          {
            "code": "540329",
            "name": "洛隆县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 95.823418,
            "children": []
          },
          {
            "code": "540330",
            "name": "边坝县",
            "level": "district",
            "parentCode": "540300",
            "longitude": 94.707504,
            "children": []
          }
        ]
      },
      {
        "code": "540400",
        "name": "林芝市",
        "level": "city",
        "parentCode": "540000",
        "longitude": 94.362348,
        "children": [
          {
            "code": "540402",
            "name": "巴宜区",
            "level": "district",
            "parentCode": "540400",
            "longitude": 94.360987,
            "children": []
          },
          {
            "code": "540421",
            "name": "工布江达县",
            "level": "district",
            "parentCode": "540400",
            "longitude": 93.246515,
            "children": []
          },
          {
            "code": "540422",
            "name": "米林县",
            "level": "district",
            "parentCode": "540400",
            "longitude": 94.213679,
            "children": []
          },
          {
            "code": "540423",
            "name": "墨脱县",
            "level": "district",
            "parentCode": "540400",
            "longitude": 95.332245,
            "children": []
          },
          {
            "code": "540424",
            "name": "波密县",
            "level": "district",
            "parentCode": "540400",
            "longitude": 95.768151,
            "children": []
          },
          {
            "code": "540425",
            "name": "察隅县",
            "level": "district",
            "parentCode": "540400",
            "longitude": 97.465002,
            "children": []
          },
          {
            "code": "540426",
            "name": "朗县",
            "level": "district",
            "parentCode": "540400",
            "longitude": 93.073429,
            "children": []
          }
        ]
      },
      {
        "code": "540500",
        "name": "山南市",
        "level": "city",
        "parentCode": "540000",
        "longitude": 91.766529,
        "children": [
          {
            "code": "540502",
            "name": "乃东区",
            "level": "district",
            "parentCode": "540500",
            "longitude": 91.76525,
            "children": []
          },
          {
            "code": "540521",
            "name": "扎囊县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 91.338,
            "children": []
          },
          {
            "code": "540522",
            "name": "贡嘎县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 90.985271,
            "children": []
          },
          {
            "code": "540523",
            "name": "桑日县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 92.015732,
            "children": []
          },
          {
            "code": "540524",
            "name": "琼结县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 91.683753,
            "children": []
          },
          {
            "code": "540525",
            "name": "曲松县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 92.201066,
            "children": []
          },
          {
            "code": "540526",
            "name": "措美县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 91.432347,
            "children": []
          },
          {
            "code": "540527",
            "name": "洛扎县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 90.858243,
            "children": []
          },
          {
            "code": "540528",
            "name": "加查县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 92.591043,
            "children": []
          },
          {
            "code": "540529",
            "name": "隆子县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 92.463309,
            "children": []
          },
          {
            "code": "540530",
            "name": "错那县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 91.960132,
            "children": []
          },
          {
            "code": "540531",
            "name": "浪卡子县",
            "level": "district",
            "parentCode": "540500",
            "longitude": 90.398747,
            "children": []
          }
        ]
      },
      {
        "code": "540600",
        "name": "那曲市",
        "level": "city",
        "parentCode": "540000",
        "longitude": 92.060214,
        "children": [
          {
            "code": "540602",
            "name": "色尼区",
            "level": "district",
            "parentCode": "540600",
            "longitude": 92.061862,
            "children": []
          },
          {
            "code": "540621",
            "name": "嘉黎县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 93.232907,
            "children": []
          },
          {
            "code": "540622",
            "name": "比如县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 93.68044,
            "children": []
          },
          {
            "code": "540623",
            "name": "聂荣县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 92.303659,
            "children": []
          },
          {
            "code": "540624",
            "name": "安多县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 91.681879,
            "children": []
          },
          {
            "code": "540625",
            "name": "申扎县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 88.709777,
            "children": []
          },
          {
            "code": "540626",
            "name": "索县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 93.784964,
            "children": []
          },
          {
            "code": "540627",
            "name": "班戈县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 90.011822,
            "children": []
          },
          {
            "code": "540628",
            "name": "巴青县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 94.054049,
            "children": []
          },
          {
            "code": "540629",
            "name": "尼玛县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 87.236646,
            "children": []
          },
          {
            "code": "540630",
            "name": "双湖县",
            "level": "district",
            "parentCode": "540600",
            "longitude": 88.838578,
            "children": []
          }
        ]
      },
      {
        "code": "542500",
        "name": "阿里地区",
        "level": "city",
        "parentCode": "540000",
        "longitude": 80.105498,
        "children": [
          {
            "code": "542521",
            "name": "普兰县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 81.177588,
            "children": []
          },
          {
            "code": "542522",
            "name": "札达县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 79.803191,
            "children": []
          },
          {
            "code": "542523",
            "name": "噶尔县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 80.105005,
            "children": []
          },
          {
            "code": "542524",
            "name": "日土县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 79.731937,
            "children": []
          },
          {
            "code": "542525",
            "name": "革吉县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 81.142896,
            "children": []
          },
          {
            "code": "542526",
            "name": "改则县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 84.062384,
            "children": []
          },
          {
            "code": "542527",
            "name": "措勤县",
            "level": "district",
            "parentCode": "542500",
            "longitude": 85.159254,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "610000",
    "name": "陕西省",
    "level": "province",
    "longitude": 108.948024,
    "children": [
      {
        "code": "610100",
        "name": "西安市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 108.948024,
        "children": [
          {
            "code": "610102",
            "name": "新城区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.959903,
            "children": []
          },
          {
            "code": "610103",
            "name": "碑林区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.946994,
            "children": []
          },
          {
            "code": "610104",
            "name": "莲湖区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.933194,
            "children": []
          },
          {
            "code": "610111",
            "name": "灞桥区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 109.067261,
            "children": []
          },
          {
            "code": "610112",
            "name": "未央区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.946022,
            "children": []
          },
          {
            "code": "610113",
            "name": "雁塔区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.926593,
            "children": []
          },
          {
            "code": "610114",
            "name": "阎良区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 109.22802,
            "children": []
          },
          {
            "code": "610115",
            "name": "临潼区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 109.213986,
            "children": []
          },
          {
            "code": "610116",
            "name": "长安区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.941579,
            "children": []
          },
          {
            "code": "610117",
            "name": "高陵区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 109.088896,
            "children": []
          },
          {
            "code": "610118",
            "name": "鄠邑区",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.607385,
            "children": []
          },
          {
            "code": "610122",
            "name": "蓝田县",
            "level": "district",
            "parentCode": "610100",
            "longitude": 109.317634,
            "children": []
          },
          {
            "code": "610124",
            "name": "周至县",
            "level": "district",
            "parentCode": "610100",
            "longitude": 108.216465,
            "children": []
          }
        ]
      },
      {
        "code": "610200",
        "name": "铜川市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 108.979608,
        "children": [
          {
            "code": "610202",
            "name": "王益区",
            "level": "district",
            "parentCode": "610200",
            "longitude": 109.075862,
            "children": []
          },
          {
            "code": "610203",
            "name": "印台区",
            "level": "district",
            "parentCode": "610200",
            "longitude": 109.100814,
            "children": []
          },
          {
            "code": "610204",
            "name": "耀州区",
            "level": "district",
            "parentCode": "610200",
            "longitude": 108.962538,
            "children": []
          },
          {
            "code": "610222",
            "name": "宜君县",
            "level": "district",
            "parentCode": "610200",
            "longitude": 109.118278,
            "children": []
          }
        ]
      },
      {
        "code": "610300",
        "name": "宝鸡市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 107.14487,
        "children": [
          {
            "code": "610302",
            "name": "渭滨区",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.144467,
            "children": []
          },
          {
            "code": "610303",
            "name": "金台区",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.149943,
            "children": []
          },
          {
            "code": "610304",
            "name": "陈仓区",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.383645,
            "children": []
          },
          {
            "code": "610322",
            "name": "凤翔区",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.400577,
            "children": []
          },
          {
            "code": "610323",
            "name": "岐山县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.624464,
            "children": []
          },
          {
            "code": "610324",
            "name": "扶风县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.891419,
            "children": []
          },
          {
            "code": "610326",
            "name": "眉县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.752371,
            "children": []
          },
          {
            "code": "610327",
            "name": "陇县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 106.857066,
            "children": []
          },
          {
            "code": "610328",
            "name": "千阳县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.132987,
            "children": []
          },
          {
            "code": "610329",
            "name": "麟游县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.796608,
            "children": []
          },
          {
            "code": "610330",
            "name": "凤县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 106.525212,
            "children": []
          },
          {
            "code": "610331",
            "name": "太白县",
            "level": "district",
            "parentCode": "610300",
            "longitude": 107.316533,
            "children": []
          }
        ]
      },
      {
        "code": "610400",
        "name": "咸阳市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 108.705117,
        "children": [
          {
            "code": "610402",
            "name": "秦都区",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.698636,
            "children": []
          },
          {
            "code": "610403",
            "name": "杨陵区",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.086348,
            "children": []
          },
          {
            "code": "610404",
            "name": "渭城区",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.730957,
            "children": []
          },
          {
            "code": "610422",
            "name": "三原县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.943481,
            "children": []
          },
          {
            "code": "610423",
            "name": "泾阳县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.83784,
            "children": []
          },
          {
            "code": "610424",
            "name": "乾县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.247406,
            "children": []
          },
          {
            "code": "610425",
            "name": "礼泉县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.428317,
            "children": []
          },
          {
            "code": "610426",
            "name": "永寿县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.143129,
            "children": []
          },
          {
            "code": "610428",
            "name": "长武县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 107.795835,
            "children": []
          },
          {
            "code": "610429",
            "name": "旬邑县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.337231,
            "children": []
          },
          {
            "code": "610430",
            "name": "淳化县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.581173,
            "children": []
          },
          {
            "code": "610431",
            "name": "武功县",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.212857,
            "children": []
          },
          {
            "code": "610481",
            "name": "兴平市",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.488493,
            "children": []
          },
          {
            "code": "610482",
            "name": "彬州市",
            "level": "district",
            "parentCode": "610400",
            "longitude": 108.083674,
            "children": []
          }
        ]
      },
      {
        "code": "610500",
        "name": "渭南市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 109.502882,
        "children": [
          {
            "code": "610502",
            "name": "临渭区",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.503299,
            "children": []
          },
          {
            "code": "610503",
            "name": "华州区",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.76141,
            "children": []
          },
          {
            "code": "610522",
            "name": "潼关县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 110.24726,
            "children": []
          },
          {
            "code": "610523",
            "name": "大荔县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.943123,
            "children": []
          },
          {
            "code": "610524",
            "name": "合阳县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 110.147979,
            "children": []
          },
          {
            "code": "610525",
            "name": "澄城县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.937609,
            "children": []
          },
          {
            "code": "610526",
            "name": "蒲城县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.589653,
            "children": []
          },
          {
            "code": "610527",
            "name": "白水县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.594309,
            "children": []
          },
          {
            "code": "610528",
            "name": "富平县",
            "level": "district",
            "parentCode": "610500",
            "longitude": 109.187174,
            "children": []
          },
          {
            "code": "610581",
            "name": "韩城市",
            "level": "district",
            "parentCode": "610500",
            "longitude": 110.452391,
            "children": []
          },
          {
            "code": "610582",
            "name": "华阴市",
            "level": "district",
            "parentCode": "610500",
            "longitude": 110.08952,
            "children": []
          }
        ]
      },
      {
        "code": "610600",
        "name": "延安市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 109.49081,
        "children": [
          {
            "code": "610602",
            "name": "宝塔区",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.49069,
            "children": []
          },
          {
            "code": "610603",
            "name": "安塞区",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.325341,
            "children": []
          },
          {
            "code": "610621",
            "name": "延长县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 110.012961,
            "children": []
          },
          {
            "code": "610622",
            "name": "延川县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 110.190314,
            "children": []
          },
          {
            "code": "610625",
            "name": "志丹县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 108.768898,
            "children": []
          },
          {
            "code": "610626",
            "name": "吴起县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 108.176976,
            "children": []
          },
          {
            "code": "610627",
            "name": "甘泉县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.34961,
            "children": []
          },
          {
            "code": "610628",
            "name": "富县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.384136,
            "children": []
          },
          {
            "code": "610629",
            "name": "洛川县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.435712,
            "children": []
          },
          {
            "code": "610630",
            "name": "宜川县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 110.175537,
            "children": []
          },
          {
            "code": "610631",
            "name": "黄龙县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.83502,
            "children": []
          },
          {
            "code": "610632",
            "name": "黄陵县",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.262469,
            "children": []
          },
          {
            "code": "610681",
            "name": "子长市",
            "level": "district",
            "parentCode": "610600",
            "longitude": 109.675968,
            "children": []
          }
        ]
      },
      {
        "code": "610700",
        "name": "汉中市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 107.028621,
        "children": [
          {
            "code": "610702",
            "name": "汉台区",
            "level": "district",
            "parentCode": "610700",
            "longitude": 107.028233,
            "children": []
          },
          {
            "code": "610703",
            "name": "南郑区",
            "level": "district",
            "parentCode": "610700",
            "longitude": 106.942393,
            "children": []
          },
          {
            "code": "610722",
            "name": "城固县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 107.329887,
            "children": []
          },
          {
            "code": "610723",
            "name": "洋县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 107.549962,
            "children": []
          },
          {
            "code": "610724",
            "name": "西乡县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 107.765858,
            "children": []
          },
          {
            "code": "610725",
            "name": "勉县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 106.680175,
            "children": []
          },
          {
            "code": "610726",
            "name": "宁强县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 106.25739,
            "children": []
          },
          {
            "code": "610727",
            "name": "略阳县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 106.153899,
            "children": []
          },
          {
            "code": "610728",
            "name": "镇巴县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 107.89531,
            "children": []
          },
          {
            "code": "610729",
            "name": "留坝县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 106.924377,
            "children": []
          },
          {
            "code": "610730",
            "name": "佛坪县",
            "level": "district",
            "parentCode": "610700",
            "longitude": 107.988582,
            "children": []
          }
        ]
      },
      {
        "code": "610800",
        "name": "榆林市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 109.741193,
        "children": [
          {
            "code": "610802",
            "name": "榆阳区",
            "level": "district",
            "parentCode": "610800",
            "longitude": 109.74791,
            "children": []
          },
          {
            "code": "610803",
            "name": "横山区",
            "level": "district",
            "parentCode": "610800",
            "longitude": 109.292596,
            "children": []
          },
          {
            "code": "610822",
            "name": "府谷县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 111.069645,
            "children": []
          },
          {
            "code": "610824",
            "name": "靖边县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 108.80567,
            "children": []
          },
          {
            "code": "610825",
            "name": "定边县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 107.601284,
            "children": []
          },
          {
            "code": "610826",
            "name": "绥德县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.265377,
            "children": []
          },
          {
            "code": "610827",
            "name": "米脂县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.178683,
            "children": []
          },
          {
            "code": "610828",
            "name": "佳县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.493367,
            "children": []
          },
          {
            "code": "610829",
            "name": "吴堡县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.739315,
            "children": []
          },
          {
            "code": "610830",
            "name": "清涧县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.12146,
            "children": []
          },
          {
            "code": "610831",
            "name": "子洲县",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.03457,
            "children": []
          },
          {
            "code": "610881",
            "name": "神木市",
            "level": "district",
            "parentCode": "610800",
            "longitude": 110.497005,
            "children": []
          }
        ]
      },
      {
        "code": "610900",
        "name": "安康市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 109.029273,
        "children": [
          {
            "code": "610902",
            "name": "汉滨区",
            "level": "district",
            "parentCode": "610900",
            "longitude": 109.029098,
            "children": []
          },
          {
            "code": "610921",
            "name": "汉阴县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 108.510946,
            "children": []
          },
          {
            "code": "610922",
            "name": "石泉县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 108.250512,
            "children": []
          },
          {
            "code": "610923",
            "name": "宁陕县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 108.313714,
            "children": []
          },
          {
            "code": "610924",
            "name": "紫阳县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 108.537788,
            "children": []
          },
          {
            "code": "610925",
            "name": "岚皋县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 108.900663,
            "children": []
          },
          {
            "code": "610926",
            "name": "平利县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 109.361865,
            "children": []
          },
          {
            "code": "610927",
            "name": "镇坪县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 109.526437,
            "children": []
          },
          {
            "code": "610928",
            "name": "旬阳市",
            "level": "district",
            "parentCode": "610900",
            "longitude": 109.368149,
            "children": []
          },
          {
            "code": "610929",
            "name": "白河县",
            "level": "district",
            "parentCode": "610900",
            "longitude": 110.114186,
            "children": []
          }
        ]
      },
      {
        "code": "611000",
        "name": "商洛市",
        "level": "city",
        "parentCode": "610000",
        "longitude": 109.939776,
        "children": [
          {
            "code": "611002",
            "name": "商州区",
            "level": "district",
            "parentCode": "611000",
            "longitude": 109.937685,
            "children": []
          },
          {
            "code": "611021",
            "name": "洛南县",
            "level": "district",
            "parentCode": "611000",
            "longitude": 110.145716,
            "children": []
          },
          {
            "code": "611022",
            "name": "丹凤县",
            "level": "district",
            "parentCode": "611000",
            "longitude": 110.33191,
            "children": []
          },
          {
            "code": "611023",
            "name": "商南县",
            "level": "district",
            "parentCode": "611000",
            "longitude": 110.885437,
            "children": []
          },
          {
            "code": "611024",
            "name": "山阳县",
            "level": "district",
            "parentCode": "611000",
            "longitude": 109.880435,
            "children": []
          },
          {
            "code": "611025",
            "name": "镇安县",
            "level": "district",
            "parentCode": "611000",
            "longitude": 109.151075,
            "children": []
          },
          {
            "code": "611026",
            "name": "柞水县",
            "level": "district",
            "parentCode": "611000",
            "longitude": 109.111249,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "620000",
    "name": "甘肃省",
    "level": "province",
    "longitude": 103.823557,
    "children": [
      {
        "code": "620100",
        "name": "兰州市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 103.823557,
        "children": [
          {
            "code": "620102",
            "name": "城关区",
            "level": "district",
            "parentCode": "620100",
            "longitude": 103.841032,
            "children": []
          },
          {
            "code": "620103",
            "name": "七里河区",
            "level": "district",
            "parentCode": "620100",
            "longitude": 103.784326,
            "children": []
          },
          {
            "code": "620104",
            "name": "西固区",
            "level": "district",
            "parentCode": "620100",
            "longitude": 103.622331,
            "children": []
          },
          {
            "code": "620105",
            "name": "安宁区",
            "level": "district",
            "parentCode": "620100",
            "longitude": 103.724038,
            "children": []
          },
          {
            "code": "620111",
            "name": "红古区",
            "level": "district",
            "parentCode": "620100",
            "longitude": 102.861814,
            "children": []
          },
          {
            "code": "620121",
            "name": "永登县",
            "level": "district",
            "parentCode": "620100",
            "longitude": 103.262203,
            "children": []
          },
          {
            "code": "620122",
            "name": "皋兰县",
            "level": "district",
            "parentCode": "620100",
            "longitude": 103.94933,
            "children": []
          },
          {
            "code": "620123",
            "name": "榆中县",
            "level": "district",
            "parentCode": "620100",
            "longitude": 104.114975,
            "children": []
          }
        ]
      },
      {
        "code": "620200",
        "name": "嘉峪关市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 98.277304,
        "children": [
          {
            "code": "620200-self",
            "name": "嘉峪关市",
            "level": "district",
            "parentCode": "620200",
            "longitude": 98.277304,
            "children": []
          }
        ]
      },
      {
        "code": "620300",
        "name": "金昌市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 102.187888,
        "children": [
          {
            "code": "620302",
            "name": "金川区",
            "level": "district",
            "parentCode": "620300",
            "longitude": 102.187683,
            "children": []
          },
          {
            "code": "620321",
            "name": "永昌县",
            "level": "district",
            "parentCode": "620300",
            "longitude": 101.971957,
            "children": []
          }
        ]
      },
      {
        "code": "620400",
        "name": "白银市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 104.173606,
        "children": [
          {
            "code": "620402",
            "name": "白银区",
            "level": "district",
            "parentCode": "620400",
            "longitude": 104.17425,
            "children": []
          },
          {
            "code": "620403",
            "name": "平川区",
            "level": "district",
            "parentCode": "620400",
            "longitude": 104.819207,
            "children": []
          },
          {
            "code": "620421",
            "name": "靖远县",
            "level": "district",
            "parentCode": "620400",
            "longitude": 104.686972,
            "children": []
          },
          {
            "code": "620422",
            "name": "会宁县",
            "level": "district",
            "parentCode": "620400",
            "longitude": 105.054337,
            "children": []
          },
          {
            "code": "620423",
            "name": "景泰县",
            "level": "district",
            "parentCode": "620400",
            "longitude": 104.066394,
            "children": []
          }
        ]
      },
      {
        "code": "620500",
        "name": "天水市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 105.724998,
        "children": [
          {
            "code": "620502",
            "name": "秦州区",
            "level": "district",
            "parentCode": "620500",
            "longitude": 105.724477,
            "children": []
          },
          {
            "code": "620503",
            "name": "麦积区",
            "level": "district",
            "parentCode": "620500",
            "longitude": 105.897631,
            "children": []
          },
          {
            "code": "620521",
            "name": "清水县",
            "level": "district",
            "parentCode": "620500",
            "longitude": 106.139878,
            "children": []
          },
          {
            "code": "620522",
            "name": "秦安县",
            "level": "district",
            "parentCode": "620500",
            "longitude": 105.6733,
            "children": []
          },
          {
            "code": "620523",
            "name": "甘谷县",
            "level": "district",
            "parentCode": "620500",
            "longitude": 105.332347,
            "children": []
          },
          {
            "code": "620524",
            "name": "武山县",
            "level": "district",
            "parentCode": "620500",
            "longitude": 104.891696,
            "children": []
          },
          {
            "code": "620525",
            "name": "张家川回族自治县",
            "level": "district",
            "parentCode": "620500",
            "longitude": 106.212416,
            "children": []
          }
        ]
      },
      {
        "code": "620600",
        "name": "武威市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 102.634697,
        "children": [
          {
            "code": "620602",
            "name": "凉州区",
            "level": "district",
            "parentCode": "620600",
            "longitude": 102.634492,
            "children": []
          },
          {
            "code": "620621",
            "name": "民勤县",
            "level": "district",
            "parentCode": "620600",
            "longitude": 103.090654,
            "children": []
          },
          {
            "code": "620622",
            "name": "古浪县",
            "level": "district",
            "parentCode": "620600",
            "longitude": 102.898047,
            "children": []
          },
          {
            "code": "620623",
            "name": "天祝藏族自治县",
            "level": "district",
            "parentCode": "620600",
            "longitude": 103.142034,
            "children": []
          }
        ]
      },
      {
        "code": "620700",
        "name": "张掖市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 100.455472,
        "children": [
          {
            "code": "620702",
            "name": "甘州区",
            "level": "district",
            "parentCode": "620700",
            "longitude": 100.454862,
            "children": []
          },
          {
            "code": "620721",
            "name": "肃南裕固族自治县",
            "level": "district",
            "parentCode": "620700",
            "longitude": 99.617086,
            "children": []
          },
          {
            "code": "620722",
            "name": "民乐县",
            "level": "district",
            "parentCode": "620700",
            "longitude": 100.816623,
            "children": []
          },
          {
            "code": "620723",
            "name": "临泽县",
            "level": "district",
            "parentCode": "620700",
            "longitude": 100.166333,
            "children": []
          },
          {
            "code": "620724",
            "name": "高台县",
            "level": "district",
            "parentCode": "620700",
            "longitude": 99.81665,
            "children": []
          },
          {
            "code": "620725",
            "name": "山丹县",
            "level": "district",
            "parentCode": "620700",
            "longitude": 101.088442,
            "children": []
          }
        ]
      },
      {
        "code": "620800",
        "name": "平凉市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 106.684691,
        "children": [
          {
            "code": "620802",
            "name": "崆峒区",
            "level": "district",
            "parentCode": "620800",
            "longitude": 106.684223,
            "children": []
          },
          {
            "code": "620821",
            "name": "泾川县",
            "level": "district",
            "parentCode": "620800",
            "longitude": 107.365218,
            "children": []
          },
          {
            "code": "620822",
            "name": "灵台县",
            "level": "district",
            "parentCode": "620800",
            "longitude": 107.620587,
            "children": []
          },
          {
            "code": "620823",
            "name": "崇信县",
            "level": "district",
            "parentCode": "620800",
            "longitude": 107.031253,
            "children": []
          },
          {
            "code": "620825",
            "name": "庄浪县",
            "level": "district",
            "parentCode": "620800",
            "longitude": 106.041979,
            "children": []
          },
          {
            "code": "620826",
            "name": "静宁县",
            "level": "district",
            "parentCode": "620800",
            "longitude": 105.733489,
            "children": []
          },
          {
            "code": "620881",
            "name": "华亭市",
            "level": "district",
            "parentCode": "620800",
            "longitude": 106.649308,
            "children": []
          }
        ]
      },
      {
        "code": "620900",
        "name": "酒泉市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 98.510795,
        "children": [
          {
            "code": "620902",
            "name": "肃州区",
            "level": "district",
            "parentCode": "620900",
            "longitude": 98.511155,
            "children": []
          },
          {
            "code": "620921",
            "name": "金塔县",
            "level": "district",
            "parentCode": "620900",
            "longitude": 98.902959,
            "children": []
          },
          {
            "code": "620922",
            "name": "瓜州县",
            "level": "district",
            "parentCode": "620900",
            "longitude": 95.780591,
            "children": []
          },
          {
            "code": "620923",
            "name": "肃北蒙古族自治县",
            "level": "district",
            "parentCode": "620900",
            "longitude": 94.87728,
            "children": []
          },
          {
            "code": "620924",
            "name": "阿克塞哈萨克族自治县",
            "level": "district",
            "parentCode": "620900",
            "longitude": 94.337642,
            "children": []
          },
          {
            "code": "620981",
            "name": "玉门市",
            "level": "district",
            "parentCode": "620900",
            "longitude": 97.037206,
            "children": []
          },
          {
            "code": "620982",
            "name": "敦煌市",
            "level": "district",
            "parentCode": "620900",
            "longitude": 94.664279,
            "children": []
          }
        ]
      },
      {
        "code": "621000",
        "name": "庆阳市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 107.638372,
        "children": [
          {
            "code": "621002",
            "name": "西峰区",
            "level": "district",
            "parentCode": "621000",
            "longitude": 107.638824,
            "children": []
          },
          {
            "code": "621021",
            "name": "庆城县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 107.885664,
            "children": []
          },
          {
            "code": "621022",
            "name": "环县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 107.308754,
            "children": []
          },
          {
            "code": "621023",
            "name": "华池县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 107.986288,
            "children": []
          },
          {
            "code": "621024",
            "name": "合水县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 108.019865,
            "children": []
          },
          {
            "code": "621025",
            "name": "正宁县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 108.361068,
            "children": []
          },
          {
            "code": "621026",
            "name": "宁县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 107.921182,
            "children": []
          },
          {
            "code": "621027",
            "name": "镇原县",
            "level": "district",
            "parentCode": "621000",
            "longitude": 107.195706,
            "children": []
          }
        ]
      },
      {
        "code": "621100",
        "name": "定西市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 104.626294,
        "children": [
          {
            "code": "621102",
            "name": "安定区",
            "level": "district",
            "parentCode": "621100",
            "longitude": 104.62577,
            "children": []
          },
          {
            "code": "621121",
            "name": "通渭县",
            "level": "district",
            "parentCode": "621100",
            "longitude": 105.250102,
            "children": []
          },
          {
            "code": "621122",
            "name": "陇西县",
            "level": "district",
            "parentCode": "621100",
            "longitude": 104.637554,
            "children": []
          },
          {
            "code": "621123",
            "name": "渭源县",
            "level": "district",
            "parentCode": "621100",
            "longitude": 104.211742,
            "children": []
          },
          {
            "code": "621124",
            "name": "临洮县",
            "level": "district",
            "parentCode": "621100",
            "longitude": 103.862186,
            "children": []
          },
          {
            "code": "621125",
            "name": "漳县",
            "level": "district",
            "parentCode": "621100",
            "longitude": 104.466756,
            "children": []
          },
          {
            "code": "621126",
            "name": "岷县",
            "level": "district",
            "parentCode": "621100",
            "longitude": 104.039882,
            "children": []
          }
        ]
      },
      {
        "code": "621200",
        "name": "陇南市",
        "level": "city",
        "parentCode": "620000",
        "longitude": 104.929379,
        "children": [
          {
            "code": "621202",
            "name": "武都区",
            "level": "district",
            "parentCode": "621200",
            "longitude": 104.929866,
            "children": []
          },
          {
            "code": "621221",
            "name": "成县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 105.734434,
            "children": []
          },
          {
            "code": "621222",
            "name": "文县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 104.682448,
            "children": []
          },
          {
            "code": "621223",
            "name": "宕昌县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 104.394475,
            "children": []
          },
          {
            "code": "621224",
            "name": "康县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 105.609534,
            "children": []
          },
          {
            "code": "621225",
            "name": "西和县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 105.299737,
            "children": []
          },
          {
            "code": "621226",
            "name": "礼县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 105.181616,
            "children": []
          },
          {
            "code": "621227",
            "name": "徽县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 106.085632,
            "children": []
          },
          {
            "code": "621228",
            "name": "两当县",
            "level": "district",
            "parentCode": "621200",
            "longitude": 106.306959,
            "children": []
          }
        ]
      },
      {
        "code": "622900",
        "name": "临夏回族自治州",
        "level": "city",
        "parentCode": "620000",
        "longitude": 103.212006,
        "children": [
          {
            "code": "622901",
            "name": "临夏市",
            "level": "district",
            "parentCode": "622900",
            "longitude": 103.211634,
            "children": []
          },
          {
            "code": "622921",
            "name": "临夏县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 102.993873,
            "children": []
          },
          {
            "code": "622922",
            "name": "康乐县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 103.709852,
            "children": []
          },
          {
            "code": "622923",
            "name": "永靖县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 103.319871,
            "children": []
          },
          {
            "code": "622924",
            "name": "广河县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 103.576188,
            "children": []
          },
          {
            "code": "622925",
            "name": "和政县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 103.350357,
            "children": []
          },
          {
            "code": "622926",
            "name": "东乡族自治县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 103.389568,
            "children": []
          },
          {
            "code": "622927",
            "name": "积石山保安族东乡族撒拉族自治县",
            "level": "district",
            "parentCode": "622900",
            "longitude": 102.877473,
            "children": []
          }
        ]
      },
      {
        "code": "623000",
        "name": "甘南藏族自治州",
        "level": "city",
        "parentCode": "620000",
        "longitude": 102.911008,
        "children": [
          {
            "code": "623001",
            "name": "合作市",
            "level": "district",
            "parentCode": "623000",
            "longitude": 102.91149,
            "children": []
          },
          {
            "code": "623021",
            "name": "临潭县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 103.353054,
            "children": []
          },
          {
            "code": "623022",
            "name": "卓尼县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 103.508508,
            "children": []
          },
          {
            "code": "623023",
            "name": "舟曲县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 104.370271,
            "children": []
          },
          {
            "code": "623024",
            "name": "迭部县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 103.221009,
            "children": []
          },
          {
            "code": "623025",
            "name": "玛曲县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 102.075767,
            "children": []
          },
          {
            "code": "623026",
            "name": "碌曲县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 102.488495,
            "children": []
          },
          {
            "code": "623027",
            "name": "夏河县",
            "level": "district",
            "parentCode": "623000",
            "longitude": 102.520743,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "630000",
    "name": "青海省",
    "level": "province",
    "longitude": 101.778916,
    "children": [
      {
        "code": "630100",
        "name": "西宁市",
        "level": "city",
        "parentCode": "630000",
        "longitude": 101.778916,
        "children": [
          {
            "code": "630102",
            "name": "城东区",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.796095,
            "children": []
          },
          {
            "code": "630103",
            "name": "城中区",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.784554,
            "children": []
          },
          {
            "code": "630104",
            "name": "城西区",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.763649,
            "children": []
          },
          {
            "code": "630105",
            "name": "城北区",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.761297,
            "children": []
          },
          {
            "code": "630106",
            "name": "湟中区",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.569475,
            "children": []
          },
          {
            "code": "630121",
            "name": "大通回族土族自治县",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.684183,
            "children": []
          },
          {
            "code": "630123",
            "name": "湟源县",
            "level": "district",
            "parentCode": "630100",
            "longitude": 101.263435,
            "children": []
          }
        ]
      },
      {
        "code": "630200",
        "name": "海东市",
        "level": "city",
        "parentCode": "630000",
        "longitude": 102.10327,
        "children": [
          {
            "code": "630202",
            "name": "乐都区",
            "level": "district",
            "parentCode": "630200",
            "longitude": 102.402431,
            "children": []
          },
          {
            "code": "630203",
            "name": "平安区",
            "level": "district",
            "parentCode": "630200",
            "longitude": 102.104295,
            "children": []
          },
          {
            "code": "630222",
            "name": "民和回族土族自治县",
            "level": "district",
            "parentCode": "630200",
            "longitude": 102.804209,
            "children": []
          },
          {
            "code": "630223",
            "name": "互助土族自治县",
            "level": "district",
            "parentCode": "630200",
            "longitude": 101.956734,
            "children": []
          },
          {
            "code": "630224",
            "name": "化隆回族自治县",
            "level": "district",
            "parentCode": "630200",
            "longitude": 102.262329,
            "children": []
          },
          {
            "code": "630225",
            "name": "循化撒拉族自治县",
            "level": "district",
            "parentCode": "630200",
            "longitude": 102.486534,
            "children": []
          }
        ]
      },
      {
        "code": "632200",
        "name": "海北藏族自治州",
        "level": "city",
        "parentCode": "630000",
        "longitude": 100.901059,
        "children": [
          {
            "code": "632221",
            "name": "门源回族自治县",
            "level": "district",
            "parentCode": "632200",
            "longitude": 101.618461,
            "children": []
          },
          {
            "code": "632222",
            "name": "祁连县",
            "level": "district",
            "parentCode": "632200",
            "longitude": 100.249778,
            "children": []
          },
          {
            "code": "632223",
            "name": "海晏县",
            "level": "district",
            "parentCode": "632200",
            "longitude": 100.90049,
            "children": []
          },
          {
            "code": "632224",
            "name": "刚察县",
            "level": "district",
            "parentCode": "632200",
            "longitude": 100.138417,
            "children": []
          }
        ]
      },
      {
        "code": "632300",
        "name": "黄南藏族自治州",
        "level": "city",
        "parentCode": "630000",
        "longitude": 102.019988,
        "children": [
          {
            "code": "632301",
            "name": "同仁市",
            "level": "district",
            "parentCode": "632300",
            "longitude": 102.017604,
            "children": []
          },
          {
            "code": "632322",
            "name": "尖扎县",
            "level": "district",
            "parentCode": "632300",
            "longitude": 102.031953,
            "children": []
          },
          {
            "code": "632323",
            "name": "泽库县",
            "level": "district",
            "parentCode": "632300",
            "longitude": 101.469343,
            "children": []
          },
          {
            "code": "632324",
            "name": "河南蒙古族自治县",
            "level": "district",
            "parentCode": "632300",
            "longitude": 101.611877,
            "children": []
          }
        ]
      },
      {
        "code": "632500",
        "name": "海南藏族自治州",
        "level": "city",
        "parentCode": "630000",
        "longitude": 100.619542,
        "children": [
          {
            "code": "632521",
            "name": "共和县",
            "level": "district",
            "parentCode": "632500",
            "longitude": 100.619597,
            "children": []
          },
          {
            "code": "632522",
            "name": "同德县",
            "level": "district",
            "parentCode": "632500",
            "longitude": 100.579465,
            "children": []
          },
          {
            "code": "632523",
            "name": "贵德县",
            "level": "district",
            "parentCode": "632500",
            "longitude": 101.431856,
            "children": []
          },
          {
            "code": "632524",
            "name": "兴海县",
            "level": "district",
            "parentCode": "632500",
            "longitude": 99.986963,
            "children": []
          },
          {
            "code": "632525",
            "name": "贵南县",
            "level": "district",
            "parentCode": "632500",
            "longitude": 100.74792,
            "children": []
          }
        ]
      },
      {
        "code": "632600",
        "name": "果洛藏族自治州",
        "level": "city",
        "parentCode": "630000",
        "longitude": 100.242143,
        "children": [
          {
            "code": "632621",
            "name": "玛沁县",
            "level": "district",
            "parentCode": "632600",
            "longitude": 100.243531,
            "children": []
          },
          {
            "code": "632622",
            "name": "班玛县",
            "level": "district",
            "parentCode": "632600",
            "longitude": 100.737955,
            "children": []
          },
          {
            "code": "632623",
            "name": "甘德县",
            "level": "district",
            "parentCode": "632600",
            "longitude": 99.902589,
            "children": []
          },
          {
            "code": "632624",
            "name": "达日县",
            "level": "district",
            "parentCode": "632600",
            "longitude": 99.651715,
            "children": []
          },
          {
            "code": "632625",
            "name": "久治县",
            "level": "district",
            "parentCode": "632600",
            "longitude": 101.484884,
            "children": []
          },
          {
            "code": "632626",
            "name": "玛多县",
            "level": "district",
            "parentCode": "632600",
            "longitude": 98.211343,
            "children": []
          }
        ]
      },
      {
        "code": "632700",
        "name": "玉树藏族自治州",
        "level": "city",
        "parentCode": "630000",
        "longitude": 97.008522,
        "children": [
          {
            "code": "632701",
            "name": "玉树市",
            "level": "district",
            "parentCode": "632700",
            "longitude": 97.008762,
            "children": []
          },
          {
            "code": "632722",
            "name": "杂多县",
            "level": "district",
            "parentCode": "632700",
            "longitude": 95.293423,
            "children": []
          },
          {
            "code": "632723",
            "name": "称多县",
            "level": "district",
            "parentCode": "632700",
            "longitude": 97.110893,
            "children": []
          },
          {
            "code": "632724",
            "name": "治多县",
            "level": "district",
            "parentCode": "632700",
            "longitude": 95.616843,
            "children": []
          },
          {
            "code": "632725",
            "name": "囊谦县",
            "level": "district",
            "parentCode": "632700",
            "longitude": 96.479797,
            "children": []
          },
          {
            "code": "632726",
            "name": "曲麻莱县",
            "level": "district",
            "parentCode": "632700",
            "longitude": 95.800674,
            "children": []
          }
        ]
      },
      {
        "code": "632800",
        "name": "海西蒙古族藏族自治州",
        "level": "city",
        "parentCode": "630000",
        "longitude": 97.370785,
        "children": [
          {
            "code": "632801",
            "name": "格尔木市",
            "level": "district",
            "parentCode": "632800",
            "longitude": 94.905777,
            "children": []
          },
          {
            "code": "632802",
            "name": "德令哈市",
            "level": "district",
            "parentCode": "632800",
            "longitude": 97.370143,
            "children": []
          },
          {
            "code": "632803",
            "name": "茫崖市",
            "level": "district",
            "parentCode": "632800",
            "longitude": 90.855955,
            "children": []
          },
          {
            "code": "632821",
            "name": "乌兰县",
            "level": "district",
            "parentCode": "632800",
            "longitude": 98.479852,
            "children": []
          },
          {
            "code": "632822",
            "name": "都兰县",
            "level": "district",
            "parentCode": "632800",
            "longitude": 98.089161,
            "children": []
          },
          {
            "code": "632823",
            "name": "天峻县",
            "level": "district",
            "parentCode": "632800",
            "longitude": 99.02078,
            "children": []
          },
          {
            "code": "632825",
            "name": "海西蒙古族藏族自治州直辖",
            "level": "district",
            "parentCode": "632800",
            "longitude": 95.357233,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "640000",
    "name": "宁夏回族自治区",
    "level": "province",
    "longitude": 106.278179,
    "children": [
      {
        "code": "640100",
        "name": "银川市",
        "level": "city",
        "parentCode": "640000",
        "longitude": 106.278179,
        "children": [
          {
            "code": "640104",
            "name": "兴庆区",
            "level": "district",
            "parentCode": "640100",
            "longitude": 106.278393,
            "children": []
          },
          {
            "code": "640105",
            "name": "西夏区",
            "level": "district",
            "parentCode": "640100",
            "longitude": 106.132116,
            "children": []
          },
          {
            "code": "640106",
            "name": "金凤区",
            "level": "district",
            "parentCode": "640100",
            "longitude": 106.228486,
            "children": []
          },
          {
            "code": "640121",
            "name": "永宁县",
            "level": "district",
            "parentCode": "640100",
            "longitude": 106.253781,
            "children": []
          },
          {
            "code": "640122",
            "name": "贺兰县",
            "level": "district",
            "parentCode": "640100",
            "longitude": 106.345904,
            "children": []
          },
          {
            "code": "640181",
            "name": "灵武市",
            "level": "district",
            "parentCode": "640100",
            "longitude": 106.334701,
            "children": []
          }
        ]
      },
      {
        "code": "640200",
        "name": "石嘴山市",
        "level": "city",
        "parentCode": "640000",
        "longitude": 106.376173,
        "children": [
          {
            "code": "640202",
            "name": "大武口区",
            "level": "district",
            "parentCode": "640200",
            "longitude": 106.376651,
            "children": []
          },
          {
            "code": "640205",
            "name": "惠农区",
            "level": "district",
            "parentCode": "640200",
            "longitude": 106.775513,
            "children": []
          },
          {
            "code": "640221",
            "name": "平罗县",
            "level": "district",
            "parentCode": "640200",
            "longitude": 106.54489,
            "children": []
          }
        ]
      },
      {
        "code": "640300",
        "name": "吴忠市",
        "level": "city",
        "parentCode": "640000",
        "longitude": 106.199409,
        "children": [
          {
            "code": "640302",
            "name": "利通区",
            "level": "district",
            "parentCode": "640300",
            "longitude": 106.199419,
            "children": []
          },
          {
            "code": "640303",
            "name": "红寺堡区",
            "level": "district",
            "parentCode": "640300",
            "longitude": 106.067315,
            "children": []
          },
          {
            "code": "640323",
            "name": "盐池县",
            "level": "district",
            "parentCode": "640300",
            "longitude": 107.40541,
            "children": []
          },
          {
            "code": "640324",
            "name": "同心县",
            "level": "district",
            "parentCode": "640300",
            "longitude": 105.914764,
            "children": []
          },
          {
            "code": "640381",
            "name": "青铜峡市",
            "level": "district",
            "parentCode": "640300",
            "longitude": 106.075395,
            "children": []
          }
        ]
      },
      {
        "code": "640400",
        "name": "固原市",
        "level": "city",
        "parentCode": "640000",
        "longitude": 106.285241,
        "children": [
          {
            "code": "640402",
            "name": "原州区",
            "level": "district",
            "parentCode": "640400",
            "longitude": 106.28477,
            "children": []
          },
          {
            "code": "640422",
            "name": "西吉县",
            "level": "district",
            "parentCode": "640400",
            "longitude": 105.731801,
            "children": []
          },
          {
            "code": "640423",
            "name": "隆德县",
            "level": "district",
            "parentCode": "640400",
            "longitude": 106.12344,
            "children": []
          },
          {
            "code": "640424",
            "name": "泾源县",
            "level": "district",
            "parentCode": "640400",
            "longitude": 106.338674,
            "children": []
          },
          {
            "code": "640425",
            "name": "彭阳县",
            "level": "district",
            "parentCode": "640400",
            "longitude": 106.641512,
            "children": []
          }
        ]
      },
      {
        "code": "640500",
        "name": "中卫市",
        "level": "city",
        "parentCode": "640000",
        "longitude": 105.189568,
        "children": [
          {
            "code": "640502",
            "name": "沙坡头区",
            "level": "district",
            "parentCode": "640500",
            "longitude": 105.190536,
            "children": []
          },
          {
            "code": "640521",
            "name": "中宁县",
            "level": "district",
            "parentCode": "640500",
            "longitude": 105.675784,
            "children": []
          },
          {
            "code": "640522",
            "name": "海原县",
            "level": "district",
            "parentCode": "640500",
            "longitude": 105.647323,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "650000",
    "name": "新疆维吾尔自治区",
    "level": "province",
    "longitude": 87.617733,
    "children": [
      {
        "code": "650100",
        "name": "乌鲁木齐市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 87.617733,
        "children": [
          {
            "code": "650102",
            "name": "天山区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.620116,
            "children": []
          },
          {
            "code": "650103",
            "name": "沙依巴克区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.596639,
            "children": []
          },
          {
            "code": "650104",
            "name": "新市区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.560653,
            "children": []
          },
          {
            "code": "650105",
            "name": "水磨沟区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.613093,
            "children": []
          },
          {
            "code": "650106",
            "name": "头屯河区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.425823,
            "children": []
          },
          {
            "code": "650107",
            "name": "达坂城区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 88.30994,
            "children": []
          },
          {
            "code": "650109",
            "name": "米东区",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.691801,
            "children": []
          },
          {
            "code": "650121",
            "name": "乌鲁木齐县",
            "level": "district",
            "parentCode": "650100",
            "longitude": 87.505603,
            "children": []
          }
        ]
      },
      {
        "code": "650200",
        "name": "克拉玛依市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 84.873946,
        "children": [
          {
            "code": "650202",
            "name": "独山子区",
            "level": "district",
            "parentCode": "650200",
            "longitude": 84.882267,
            "children": []
          },
          {
            "code": "650203",
            "name": "克拉玛依区",
            "level": "district",
            "parentCode": "650200",
            "longitude": 84.868918,
            "children": []
          },
          {
            "code": "650204",
            "name": "白碱滩区",
            "level": "district",
            "parentCode": "650200",
            "longitude": 85.129882,
            "children": []
          },
          {
            "code": "650205",
            "name": "乌尔禾区",
            "level": "district",
            "parentCode": "650200",
            "longitude": 85.697767,
            "children": []
          }
        ]
      },
      {
        "code": "650400",
        "name": "吐鲁番市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 89.184078,
        "children": [
          {
            "code": "650402",
            "name": "高昌区",
            "level": "district",
            "parentCode": "650400",
            "longitude": 89.182324,
            "children": []
          },
          {
            "code": "650421",
            "name": "鄯善县",
            "level": "district",
            "parentCode": "650400",
            "longitude": 90.212692,
            "children": []
          },
          {
            "code": "650422",
            "name": "托克逊县",
            "level": "district",
            "parentCode": "650400",
            "longitude": 88.655771,
            "children": []
          }
        ]
      },
      {
        "code": "650500",
        "name": "哈密市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 93.51316,
        "children": [
          {
            "code": "650502",
            "name": "伊州区",
            "level": "district",
            "parentCode": "650500",
            "longitude": 93.509174,
            "children": []
          },
          {
            "code": "650521",
            "name": "巴里坤哈萨克自治县",
            "level": "district",
            "parentCode": "650500",
            "longitude": 93.021795,
            "children": []
          },
          {
            "code": "650522",
            "name": "伊吾县",
            "level": "district",
            "parentCode": "650500",
            "longitude": 94.692773,
            "children": []
          }
        ]
      },
      {
        "code": "652300",
        "name": "昌吉回族自治州",
        "level": "city",
        "parentCode": "650000",
        "longitude": 87.304012,
        "children": [
          {
            "code": "652301",
            "name": "昌吉市",
            "level": "district",
            "parentCode": "652300",
            "longitude": 87.304112,
            "children": []
          },
          {
            "code": "652302",
            "name": "阜康市",
            "level": "district",
            "parentCode": "652300",
            "longitude": 87.98384,
            "children": []
          },
          {
            "code": "652323",
            "name": "呼图壁县",
            "level": "district",
            "parentCode": "652300",
            "longitude": 86.888613,
            "children": []
          },
          {
            "code": "652324",
            "name": "玛纳斯县",
            "level": "district",
            "parentCode": "652300",
            "longitude": 86.217687,
            "children": []
          },
          {
            "code": "652325",
            "name": "奇台县",
            "level": "district",
            "parentCode": "652300",
            "longitude": 89.591437,
            "children": []
          },
          {
            "code": "652327",
            "name": "吉木萨尔县",
            "level": "district",
            "parentCode": "652300",
            "longitude": 89.181288,
            "children": []
          },
          {
            "code": "652328",
            "name": "木垒哈萨克自治县",
            "level": "district",
            "parentCode": "652300",
            "longitude": 90.282833,
            "children": []
          }
        ]
      },
      {
        "code": "652700",
        "name": "博尔塔拉蒙古自治州",
        "level": "city",
        "parentCode": "650000",
        "longitude": 82.074778,
        "children": [
          {
            "code": "652701",
            "name": "博乐市",
            "level": "district",
            "parentCode": "652700",
            "longitude": 82.072237,
            "children": []
          },
          {
            "code": "652702",
            "name": "阿拉山口市",
            "level": "district",
            "parentCode": "652700",
            "longitude": 82.569389,
            "children": []
          },
          {
            "code": "652722",
            "name": "精河县",
            "level": "district",
            "parentCode": "652700",
            "longitude": 82.892938,
            "children": []
          },
          {
            "code": "652723",
            "name": "温泉县",
            "level": "district",
            "parentCode": "652700",
            "longitude": 81.03099,
            "children": []
          }
        ]
      },
      {
        "code": "652800",
        "name": "巴音郭楞蒙古自治州",
        "level": "city",
        "parentCode": "650000",
        "longitude": 86.150969,
        "children": [
          {
            "code": "652801",
            "name": "库尔勒市",
            "level": "district",
            "parentCode": "652800",
            "longitude": 86.145948,
            "children": []
          },
          {
            "code": "652822",
            "name": "轮台县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 84.248542,
            "children": []
          },
          {
            "code": "652823",
            "name": "尉犁县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 86.263412,
            "children": []
          },
          {
            "code": "652824",
            "name": "若羌县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 88.168807,
            "children": []
          },
          {
            "code": "652825",
            "name": "且末县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 85.532629,
            "children": []
          },
          {
            "code": "652826",
            "name": "焉耆回族自治县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 86.5698,
            "children": []
          },
          {
            "code": "652827",
            "name": "和静县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 86.391067,
            "children": []
          },
          {
            "code": "652828",
            "name": "和硕县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 86.864947,
            "children": []
          },
          {
            "code": "652829",
            "name": "博湖县",
            "level": "district",
            "parentCode": "652800",
            "longitude": 86.631576,
            "children": []
          }
        ]
      },
      {
        "code": "652900",
        "name": "阿克苏地区",
        "level": "city",
        "parentCode": "650000",
        "longitude": 80.265068,
        "children": [
          {
            "code": "652901",
            "name": "阿克苏市",
            "level": "district",
            "parentCode": "652900",
            "longitude": 80.2629,
            "children": []
          },
          {
            "code": "652902",
            "name": "库车市",
            "level": "district",
            "parentCode": "652900",
            "longitude": 82.96304,
            "children": []
          },
          {
            "code": "652922",
            "name": "温宿县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 80.243273,
            "children": []
          },
          {
            "code": "652924",
            "name": "沙雅县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 82.78077,
            "children": []
          },
          {
            "code": "652925",
            "name": "新和县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 82.610828,
            "children": []
          },
          {
            "code": "652926",
            "name": "拜城县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 81.869881,
            "children": []
          },
          {
            "code": "652927",
            "name": "乌什县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 79.230805,
            "children": []
          },
          {
            "code": "652928",
            "name": "阿瓦提县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 80.378426,
            "children": []
          },
          {
            "code": "652929",
            "name": "柯坪县",
            "level": "district",
            "parentCode": "652900",
            "longitude": 79.04785,
            "children": []
          }
        ]
      },
      {
        "code": "653000",
        "name": "克孜勒苏柯尔克孜自治州",
        "level": "city",
        "parentCode": "650000",
        "longitude": 76.172825,
        "children": [
          {
            "code": "653001",
            "name": "阿图什市",
            "level": "district",
            "parentCode": "653000",
            "longitude": 76.173939,
            "children": []
          },
          {
            "code": "653022",
            "name": "阿克陶县",
            "level": "district",
            "parentCode": "653000",
            "longitude": 75.945159,
            "children": []
          },
          {
            "code": "653023",
            "name": "阿合奇县",
            "level": "district",
            "parentCode": "653000",
            "longitude": 78.450164,
            "children": []
          },
          {
            "code": "653024",
            "name": "乌恰县",
            "level": "district",
            "parentCode": "653000",
            "longitude": 75.25969,
            "children": []
          }
        ]
      },
      {
        "code": "653100",
        "name": "喀什地区",
        "level": "city",
        "parentCode": "650000",
        "longitude": 75.989138,
        "children": [
          {
            "code": "653101",
            "name": "喀什市",
            "level": "district",
            "parentCode": "653100",
            "longitude": 75.98838,
            "children": []
          },
          {
            "code": "653121",
            "name": "疏附县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 75.863075,
            "children": []
          },
          {
            "code": "653122",
            "name": "疏勒县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 76.053653,
            "children": []
          },
          {
            "code": "653123",
            "name": "英吉沙县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 76.174292,
            "children": []
          },
          {
            "code": "653124",
            "name": "泽普县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 77.273593,
            "children": []
          },
          {
            "code": "653125",
            "name": "莎车县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 77.248884,
            "children": []
          },
          {
            "code": "653126",
            "name": "叶城县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 77.420353,
            "children": []
          },
          {
            "code": "653127",
            "name": "麦盖提县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 77.651538,
            "children": []
          },
          {
            "code": "653128",
            "name": "岳普湖县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 76.7724,
            "children": []
          },
          {
            "code": "653129",
            "name": "伽师县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 76.741982,
            "children": []
          },
          {
            "code": "653130",
            "name": "巴楚县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 78.55041,
            "children": []
          },
          {
            "code": "653131",
            "name": "塔什库尔干塔吉克自治县",
            "level": "district",
            "parentCode": "653100",
            "longitude": 75.228068,
            "children": []
          }
        ]
      },
      {
        "code": "653200",
        "name": "和田地区",
        "level": "city",
        "parentCode": "650000",
        "longitude": 79.92533,
        "children": [
          {
            "code": "653201",
            "name": "和田市",
            "level": "district",
            "parentCode": "653200",
            "longitude": 79.927542,
            "children": []
          },
          {
            "code": "653221",
            "name": "和田县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 79.81907,
            "children": []
          },
          {
            "code": "653222",
            "name": "墨玉县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 79.736629,
            "children": []
          },
          {
            "code": "653223",
            "name": "皮山县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 78.282301,
            "children": []
          },
          {
            "code": "653224",
            "name": "洛浦县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 80.184038,
            "children": []
          },
          {
            "code": "653225",
            "name": "策勒县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 80.803572,
            "children": []
          },
          {
            "code": "653226",
            "name": "于田县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 81.667845,
            "children": []
          },
          {
            "code": "653227",
            "name": "民丰县",
            "level": "district",
            "parentCode": "653200",
            "longitude": 82.692354,
            "children": []
          }
        ]
      },
      {
        "code": "654000",
        "name": "伊犁哈萨克自治州",
        "level": "city",
        "parentCode": "650000",
        "longitude": 81.317946,
        "children": [
          {
            "code": "654002",
            "name": "伊宁市",
            "level": "district",
            "parentCode": "654000",
            "longitude": 81.316343,
            "children": []
          },
          {
            "code": "654003",
            "name": "奎屯市",
            "level": "district",
            "parentCode": "654000",
            "longitude": 84.901602,
            "children": []
          },
          {
            "code": "654004",
            "name": "霍尔果斯市",
            "level": "district",
            "parentCode": "654000",
            "longitude": 80.420759,
            "children": []
          },
          {
            "code": "654021",
            "name": "伊宁县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 81.524671,
            "children": []
          },
          {
            "code": "654022",
            "name": "察布查尔锡伯自治县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 81.150874,
            "children": []
          },
          {
            "code": "654023",
            "name": "霍城县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 80.872508,
            "children": []
          },
          {
            "code": "654024",
            "name": "巩留县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 82.227044,
            "children": []
          },
          {
            "code": "654025",
            "name": "新源县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 83.258493,
            "children": []
          },
          {
            "code": "654026",
            "name": "昭苏县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 81.126029,
            "children": []
          },
          {
            "code": "654027",
            "name": "特克斯县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 81.840058,
            "children": []
          },
          {
            "code": "654028",
            "name": "尼勒克县",
            "level": "district",
            "parentCode": "654000",
            "longitude": 82.504119,
            "children": []
          }
        ]
      },
      {
        "code": "654200",
        "name": "塔城地区",
        "level": "city",
        "parentCode": "650000",
        "longitude": 82.985732,
        "children": [
          {
            "code": "654201",
            "name": "塔城市",
            "level": "district",
            "parentCode": "654200",
            "longitude": 82.983988,
            "children": []
          },
          {
            "code": "654202",
            "name": "乌苏市",
            "level": "district",
            "parentCode": "654200",
            "longitude": 84.677624,
            "children": []
          },
          {
            "code": "654221",
            "name": "额敏县",
            "level": "district",
            "parentCode": "654200",
            "longitude": 83.622118,
            "children": []
          },
          {
            "code": "654223",
            "name": "沙湾市",
            "level": "district",
            "parentCode": "654200",
            "longitude": 85.622508,
            "children": []
          },
          {
            "code": "654224",
            "name": "托里县",
            "level": "district",
            "parentCode": "654200",
            "longitude": 83.60469,
            "children": []
          },
          {
            "code": "654225",
            "name": "裕民县",
            "level": "district",
            "parentCode": "654200",
            "longitude": 82.982157,
            "children": []
          },
          {
            "code": "654226",
            "name": "和布克赛尔蒙古自治县",
            "level": "district",
            "parentCode": "654200",
            "longitude": 85.733551,
            "children": []
          }
        ]
      },
      {
        "code": "654300",
        "name": "阿勒泰地区",
        "level": "city",
        "parentCode": "650000",
        "longitude": 88.13963,
        "children": [
          {
            "code": "654301",
            "name": "阿勒泰市",
            "level": "district",
            "parentCode": "654300",
            "longitude": 88.138743,
            "children": []
          },
          {
            "code": "654321",
            "name": "布尔津县",
            "level": "district",
            "parentCode": "654300",
            "longitude": 86.86186,
            "children": []
          },
          {
            "code": "654322",
            "name": "富蕴县",
            "level": "district",
            "parentCode": "654300",
            "longitude": 89.524993,
            "children": []
          },
          {
            "code": "654323",
            "name": "福海县",
            "level": "district",
            "parentCode": "654300",
            "longitude": 87.494569,
            "children": []
          },
          {
            "code": "654324",
            "name": "哈巴河县",
            "level": "district",
            "parentCode": "654300",
            "longitude": 86.418964,
            "children": []
          },
          {
            "code": "654325",
            "name": "青河县",
            "level": "district",
            "parentCode": "654300",
            "longitude": 90.381561,
            "children": []
          },
          {
            "code": "654326",
            "name": "吉木乃县",
            "level": "district",
            "parentCode": "654300",
            "longitude": 85.876064,
            "children": []
          }
        ]
      },
      {
        "code": "659001",
        "name": "石河子市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 86.041075,
        "children": [
          {
            "code": "659001-self",
            "name": "石河子市",
            "level": "district",
            "parentCode": "659001",
            "longitude": 86.041075,
            "children": []
          }
        ]
      },
      {
        "code": "659002",
        "name": "阿拉尔市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 81.285884,
        "children": [
          {
            "code": "659002-self",
            "name": "阿拉尔市",
            "level": "district",
            "parentCode": "659002",
            "longitude": 81.285884,
            "children": []
          }
        ]
      },
      {
        "code": "659003",
        "name": "图木舒克市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 79.077978,
        "children": [
          {
            "code": "659003-self",
            "name": "图木舒克市",
            "level": "district",
            "parentCode": "659003",
            "longitude": 79.077978,
            "children": []
          }
        ]
      },
      {
        "code": "659004",
        "name": "五家渠市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 87.526884,
        "children": [
          {
            "code": "659004-self",
            "name": "五家渠市",
            "level": "district",
            "parentCode": "659004",
            "longitude": 87.526884,
            "children": []
          }
        ]
      },
      {
        "code": "659005",
        "name": "北屯市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 87.824932,
        "children": [
          {
            "code": "659005-self",
            "name": "北屯市",
            "level": "district",
            "parentCode": "659005",
            "longitude": 87.824932,
            "children": []
          }
        ]
      },
      {
        "code": "659006",
        "name": "铁门关市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 85.501218,
        "children": [
          {
            "code": "659006-self",
            "name": "铁门关市",
            "level": "district",
            "parentCode": "659006",
            "longitude": 85.501218,
            "children": []
          }
        ]
      },
      {
        "code": "659007",
        "name": "双河市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 82.353656,
        "children": [
          {
            "code": "659007-self",
            "name": "双河市",
            "level": "district",
            "parentCode": "659007",
            "longitude": 82.353656,
            "children": []
          }
        ]
      },
      {
        "code": "659008",
        "name": "可克达拉市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 80.63579,
        "children": [
          {
            "code": "659008-self",
            "name": "可克达拉市",
            "level": "district",
            "parentCode": "659008",
            "longitude": 80.63579,
            "children": []
          }
        ]
      },
      {
        "code": "659009",
        "name": "昆玉市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 79.287372,
        "children": [
          {
            "code": "659009-self",
            "name": "昆玉市",
            "level": "district",
            "parentCode": "659009",
            "longitude": 79.287372,
            "children": []
          }
        ]
      },
      {
        "code": "659010",
        "name": "胡杨河市",
        "level": "city",
        "parentCode": "650000",
        "longitude": 84.827596,
        "children": [
          {
            "code": "659010-self",
            "name": "胡杨河市",
            "level": "district",
            "parentCode": "659010",
            "longitude": 84.827596,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "710000",
    "name": "台湾省",
    "level": "province",
    "longitude": 121.509062,
    "children": [
      {
        "code": "710000-self",
        "name": "台湾省",
        "level": "city",
        "parentCode": "710000",
        "longitude": 121.509062,
        "children": [
          {
            "code": "710000-self-district",
            "name": "台湾省",
            "level": "district",
            "parentCode": "710000-self",
            "longitude": 121.509062,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "810000",
    "name": "香港特别行政区",
    "level": "province",
    "longitude": 114.173355,
    "children": [
      {
        "code": "810000-direct",
        "name": "省直辖县级行政区划",
        "level": "city",
        "parentCode": "810000",
        "longitude": 114.173355,
        "children": [
          {
            "code": "810001",
            "name": "中西区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.154373,
            "children": []
          },
          {
            "code": "810002",
            "name": "湾仔区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.182915,
            "children": []
          },
          {
            "code": "810003",
            "name": "东区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.226003,
            "children": []
          },
          {
            "code": "810004",
            "name": "南区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.160012,
            "children": []
          },
          {
            "code": "810005",
            "name": "油尖旺区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.173332,
            "children": []
          },
          {
            "code": "810006",
            "name": "深水埗区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.163242,
            "children": []
          },
          {
            "code": "810007",
            "name": "九龙城区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.192847,
            "children": []
          },
          {
            "code": "810008",
            "name": "黄大仙区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.203886,
            "children": []
          },
          {
            "code": "810009",
            "name": "观塘区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.214054,
            "children": []
          },
          {
            "code": "810010",
            "name": "荃湾区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.121079,
            "children": []
          },
          {
            "code": "810011",
            "name": "屯门区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 113.976574,
            "children": []
          },
          {
            "code": "810012",
            "name": "元朗区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.032438,
            "children": []
          },
          {
            "code": "810013",
            "name": "北区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.147364,
            "children": []
          },
          {
            "code": "810014",
            "name": "大埔区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.171743,
            "children": []
          },
          {
            "code": "810015",
            "name": "西贡区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.264645,
            "children": []
          },
          {
            "code": "810016",
            "name": "沙田区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.195365,
            "children": []
          },
          {
            "code": "810017",
            "name": "葵青区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 114.139319,
            "children": []
          },
          {
            "code": "810018",
            "name": "离岛区",
            "level": "district",
            "parentCode": "810000-direct",
            "longitude": 113.94612,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "820000",
    "name": "澳门特别行政区",
    "level": "province",
    "longitude": 113.54909,
    "children": [
      {
        "code": "820000-direct",
        "name": "省直辖县级行政区划",
        "level": "city",
        "parentCode": "820000",
        "longitude": 113.54909,
        "children": [
          {
            "code": "820001",
            "name": "花地玛堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.552896,
            "children": []
          },
          {
            "code": "820002",
            "name": "花王堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.548961,
            "children": []
          },
          {
            "code": "820003",
            "name": "望德堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.550183,
            "children": []
          },
          {
            "code": "820004",
            "name": "大堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.553647,
            "children": []
          },
          {
            "code": "820005",
            "name": "风顺堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.541928,
            "children": []
          },
          {
            "code": "820006",
            "name": "嘉模堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.558704,
            "children": []
          },
          {
            "code": "820007",
            "name": "路凼填海区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.569599,
            "children": []
          },
          {
            "code": "820008",
            "name": "圣方济各堂区",
            "level": "district",
            "parentCode": "820000-direct",
            "longitude": 113.559954,
            "children": []
          }
        ]
      }
    ]
  }
];

export function findLocation(path: readonly string[]): LocationNode | undefined {
  let nodes = LOCATION_PROVINCES;
  let current;
  for (const name of path) {
    current = nodes.find(node => node.name === name);
    if (!current) return undefined;
    nodes = current.children;
  }
  return current;
}
