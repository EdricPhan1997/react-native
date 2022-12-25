import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const RenderArray = () => {
  const [isList, setIsList] = useState([
    {
      name: "Item 1",
    },
    {
      name: "Item 2",
    },
    {
      name: "Item 3",
    },
    {
      name: "Item 4",
    },
    {
      name: "Item 5",
    },
    {
      name: "Item 6",
    },
  ]);

  //   const Data = [
  //     {
  //       title: "Title 1",
  //       data: ["item1-1", "item1-1", "item1-1"],
  //     },
  //     {
  //       title: "Title 2",
  //       data: ["item2-1", "item2-1", "item2-1"],
  //     },
  //     {
  //       title: "Title 3",
  //       data: ["item3-1", "item3-1", "item3-1"],
  //     },
  //     {
  //       title: "Title 4",
  //       data: ["item4-1", "item4-1", "item4-1"],
  //     },
  //   ];

  const [Sections, setSections] = useState([
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2"],
    },
  ]);

  const [isRefesh, setIsRefeshing] = useState(false);

  const handleRefesh = () => {
    //
    setIsRefeshing(true);
    setIsList([...isList, { name: "Item dc them 12" }]);
    setIsRefeshing(false);
  };

  //  ==> start ScrollView
  //   return (
  //     <ScrollView
  //       refreshControl={
  //         <RefreshControl refreshing={isRefesh} onRefresh={handleRefesh} />
  //       }
  //     >
  //       <SafeAreaView style={styles.body}>
  //         {isList.map((_item, _index) => (
  //           <View style={styles.view1} key={_item.key}>
  //             <Text style={styles.text}>{_item.item}</Text>
  //           </View>
  //         ))}
  //       </SafeAreaView>
  //     </ScrollView>
  //   );

  /*

   Todo:  ScrollView: dung de tao scroll khi hien thi qua dai, khi them params horizontal no se chuyen thanh row(ngang)
    * refreshControl={<RefreshControl refreshing={isRefesh} /> : khi keo xuong se thuc thi chuc nang refesh voi ios mac dinh no la false, androi thi nguoc lai

    * onRefresh === onClick tren react web : lang nghe su kien duoc thuc thi qua tac vu

   ! Nhuoc diem: sd ScrollView trong array lon se gay ra su co, boi vi no hien thi toan bo danh sach cung mot luc,va cac params truyen vao cung se han che => Dung FlatList
*/

  //  ==> end ScrollView

  // ==================================
  //  ==> start FlatList
  //   return (
  //     <FlatList
  //       //   horizontal
  //       //   inverted
  //       //   numColumns={1}
  //       keyExtractor={(item, index) => index.toString()}
  //       data={isList}
  //       renderItem={({ item }) => {
  //         return (
  //           <View style={styles.view1}>
  //             <Text style={styles.text}>{item.name}</Text>
  //           </View>
  //         );
  //       }}
  //       refreshControl={
  //         <RefreshControl refreshing={isRefesh} onRefresh={handleRefesh} />
  //       }
  //     />
  //   );

  /*
    Todo: FlatList : toan bo phai la string, item not _item => khong chiu cac ky tu dac biet vidu: _, co the tu tao key

    * numColumns de chinh cot mac dinh la 1
    * horizontal: de hien thi theo chieu ngang
    * inverted: de cuon tu phai sang trai
*/

  //  ==> end FlatList
  // ==================================

  // ==>  start SectionList

  const handleRefeshSectionList = () => {
    setIsRefeshing(true);
    const add_item = Sections.length + 1;
    setSections([
      ...Sections,
      {
        title: "Title" + add_item,
        data: ["Item " + add_item + "-1", "Item " + add_item + "-2"],
      },
    ]);
    setIsRefeshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item}</Text>;
      }}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.view1}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        );
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefesh}
          onRefresh={handleRefeshSectionList}
        />
      }
    />
  );

  /*
      Todo: voi array co phan tu array con ben trong ta dung : SectionList
  */
  // ==>  end SectionList
};

export default RenderArray;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#0000ff",
  },
  view1: {
    // width: "100%",
    height: 100,
    margin: 10,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
  },
  full: {
    width: "100%",
    height: "100%",
  },
});
