import Mock from 'mockjs'
import cityData from './citylist.json'
import categories from './difClass.json'
import homeData from './homeData.json'

/**
 * 获取地区信息
 */
Mock.mock('/getProvince', option => {
  let provinces = cityData.map(({
    text,
    value
  }, index) => ({
    code: value,
    name: text
  }));
  return {
    code: 0,
    provinces
  };
});
Mock.mock(/\/getCities\/(\d{6})/, option => {
  let urlReg = /\/getCities\/(\d{6})/;
  if (urlReg.test(option.url)) {
    let proId = RegExp.$1;
    let province = cityData.filter((pro) => {
      return proId === pro.value;
    });
    if (province.length > 0) {
      let cities = province[0].children.map(({text, value}) => ({name: text, code: value}));
      return {
        code: 0,
        cities
      };
    } else {
      return {
        code: -1
      };
    }
  } else {
    return {
      code: -1
    };
  }
});
Mock.mock(/\/getAreas\/(\d{6})\/(\d{6})/, option => {
  let urlReg = /\/getAreas\/(\d{6})\/(\d{6})/;
  if (urlReg.test(option.url)) {
    let proId = RegExp.$1;
    let cityId = RegExp.$2;
    let province = cityData.filter((pro) => {
      return proId === pro.value;
    });
    if (province.length > 0) {
      let city = province[0].children.filter((ci) => {
        return cityId === ci.value;
      })
      if (city.length > 0) {
        let areas = city[0].children.map(({text, value}) => ({name: text, code: value}));
        return {
          code: 0,
          areas
        }
      } else {
        return {
          code: -1
        };
      }
    } else {
      return {
        code: -1
      };
    }
  } else {
    return {
      code: -1
    };
  }
});
/**
 * 获取分类信息
 */
Mock.mock('/getCategories', categories);
/**
 * 获取首页所有信息
 */
Mock.mock('/homeData', homeData);
