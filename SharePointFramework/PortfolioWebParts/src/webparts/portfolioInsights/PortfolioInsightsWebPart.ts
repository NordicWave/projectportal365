import * as React from 'react';
import { IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import PortfolioInsights from './components/PortfolioInsights';
import { IPortfolioInsightsProps } from './components/IPortfolioInsightsProps';
import { IPortfolioInsightsWebPartProps } from './IPortfolioInsightsWebPartProps';
import PortfolioBaseWebPart from '../@portfolioBaseWebPart';
import { Logger, LogLevel } from '@pnp/logging';

export default class PortfolioInsightsWebPart extends PortfolioBaseWebPart<IPortfolioInsightsWebPartProps> {
  public render(): void {
    Logger.log({ message: '(PortfolioInsightsWebPart) render: Rendering <PortfolioInsights />', level: LogLevel.Info });
    const element: React.ReactElement<IPortfolioInsightsProps> = React.createElement(PortfolioInsights, { context: this.context, ...this.properties });
    super._render(this.manifest.alias, element);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
  }

  protected onDispose(): void {
    super.onDispose();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return { pages: [] };
  }
}
