/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Input } from "antd";

import Card from "../../components/card";

import InfiniteScroll from "react-infinite-scroll-component";
import * as actions from "../../store/modules/utilities/actions";

import * as Styled from "./style";

interface Options {
  name: string;
  age: Number;
}

interface Props {
  listData: Array<Options>;
}

const Home = ({ listData = [] }: Props) => {
  const [list, setList] = useState([] as Array<Options>);
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState([] as Array<Options>);
  const getMoreData = () => {
    if (current.length === list.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(list.slice(count.prev + 10, count.next + 10)));
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getList());
  }, []);

  useEffect(() => {
    setList(listData);
  }, [listData]);

  useEffect(() => {
    setCurrent(list.slice(count.prev, count.next));
  }, [list]);

  const renderList = () => {
    return (
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Carregando...</h4>}
      >
        <div>
          {current &&
            current.map((item, index) => (
              <Card name={item.name} age={item.age} />
            ))}
        </div>
      </InfiniteScroll>
    );
  };

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Search>
          <Input
            placeholder="Digite a sua pesquisa..."
            onChange={(e) => {
              if (e.target.value === "") {
                setList(listData);
              } else {
                setList(list.filter((ee) => ee.name.includes(e.target.value)));
              }
            }}
          />
        </Styled.Search>
        <Styled.List>{renderList()}</Styled.List>
      </Styled.Container>
    </Styled.Main>
  );
};

const mapStateToProps = (state: any): any => ({
  listData: state.utilities.list,
});

export default connect(mapStateToProps)(Home);
