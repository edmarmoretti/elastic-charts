/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { AxisProps } from '.';
import { Position } from '../../../../../utils/common';
import { AxisTick, getTickLabelPosition } from '../../../utils/axis_utils';
import { renderText } from '../primitives/text';
import { renderDebugRectCenterRotated } from '../utils/debug';

const TICK_TO_LABEL_GAP = 2;

/** @internal */
export function renderTickLabel(
  ctx: CanvasRenderingContext2D,
  tick: AxisTick,
  showTicks: boolean,
  { axisSpec: { position, timeAxisLayerCount }, dimension, size, debug, axisStyle }: AxisProps,
  layerGirth: number,
) {
  const labelStyle = axisStyle.tickLabel;
  const tickLabelProps = getTickLabelPosition(
    axisStyle,
    tick.domainClampedPosition,
    position,
    labelStyle.rotation,
    size,
    dimension,
    showTicks,
    labelStyle.offset,
    labelStyle.alignment,
  );

  const center = { x: tickLabelProps.x + tickLabelProps.offsetX, y: tickLabelProps.y + tickLabelProps.offsetY };

  if (debug) {
    const { maxLabelBboxWidth, maxLabelBboxHeight, maxLabelTextWidth: width, maxLabelTextHeight: height } = dimension;
    // full text container
    renderDebugRectCenterRotated(ctx, center, { ...center, width, height }, undefined, undefined, labelStyle.rotation);
    // rotated text container
    if (labelStyle.rotation % 90 !== 0) {
      renderDebugRectCenterRotated(ctx, center, { ...center, width: maxLabelBboxWidth, height: maxLabelBboxHeight });
    }
  }

  const tickOnTheSide = timeAxisLayerCount > 0 && Number.isFinite(tick.layer);

  // Moretti - remoção do ,00 dos labels dos eixos
    
  if(tick.label.substring(tick.label.length-3,tick.label.length) == ",00"){
    tick.label = tick.label.substring(0,tick.label.length-3);
  }
  if(tick.label.substring(tick.label.length-4,tick.label.length) == ",00%"){
    tick.label = tick.label.substring(0,tick.label.length-4)+"%";
  }

  //


  renderText(
    ctx,
    center,
    tick.label,
    {
      fontFamily: labelStyle.fontFamily,
      fontStyle: labelStyle.fontStyle ?? 'normal',
      fontVariant: 'normal',
      fontWeight: 'normal',
      textColor: labelStyle.fill,
      fontSize: labelStyle.fontSize,
      align: tickLabelProps.horizontalAlign,
      baseline: tickLabelProps.verticalAlign,
    },
    labelStyle.rotation,
    tickLabelProps.textOffsetX + (tickOnTheSide ? TICK_TO_LABEL_GAP : 0),
    tickLabelProps.textOffsetY + (tick.layer || 0) * layerGirth * (position === Position.Top ? -1 : 1),
    1,
    tick.direction,
  );
}
