/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License. */

import createCachedSelector from 're-reselect';
import { GlobalChartState } from '../../../../state/chart_state';
import { isBrushAvailableSelector } from './is_brush_available';
import { getChartIdSelector } from '../../../../state/selectors/get_chart_id';

const getPointerSelector = (state: GlobalChartState) => state.interactions.pointer;

export const isBrushingSelector = createCachedSelector(
  [isBrushAvailableSelector, getPointerSelector],
  (isBrushAvailable, pointer): boolean => {
    if (!isBrushAvailable) {
      return false;
    }

    return pointer.dragging;
  },
)(getChartIdSelector);
