import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import module_action from "../store/actions/modules";
import activity_action from "../store/actions/activities";
import ModuleList from "./ModuleList";

const { read_modules_from_workshop } = module_action;
const { read_activities } = activity_action;

function Modules() {
  const { id } = useParams();
  const modules_redux = useSelector(
    (store) => store.modules.modules
  );
  const activities_redux = useSelector(
    (store) => store.activities.activities 
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_modules_from_workshop({ workshop_id: id }));
    dispatch(read_activities({ _id: id })); 
  }, [dispatch, id]);

  const [expandedModule, setExpandedModule] = useState(null);
  const [likes, setLikes] = useState(
    Array(modules_redux.length).fill(false)
  );
  const [likeCount, setLikeCount] = useState(
    Array(modules_redux.length).fill(0)
  );

  const toggleExpand = (moduleId) => {
    if (expandedModule === moduleId) {
      setExpandedModule(null);
    } else {
      setExpandedModule(moduleId);
    }
  };

  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);

    const newLikeCount = [...likeCount];
    if (newLikes[index]) {
      newLikeCount[index]++;
    } else {
      newLikeCount[index]--;
    }
    setLikeCount(newLikeCount);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <ModuleList
        modules={modules_redux}
        likes={likes}
        likeCounts={likeCount}
        expandedModule={expandedModule}
        onToggleLike={toggleLike}
        onToggleExpand={toggleExpand}
        activities={activities_redux}
      />
    </div>
  );
}

export default Modules;
