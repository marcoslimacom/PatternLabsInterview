import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLastestData } from "../features/feeds/lastestData/lastestDataThunk";
import { LastestDataSelector } from './../features/feeds/lastestData/lastestDataSelector';
import LastestDataState from './../features/feeds/lastestData/lastestDataState';

export default function useLastestData() {
  const dispatch = useDispatch();

  const { lastestData, loading, errors } = useSelector(
    LastestDataSelector
  );

  useEffect(() => {
    dispatch(getLastestData());
  }, [dispatch]);

  return { lastestData, loading, errors } as LastestDataState;
}
