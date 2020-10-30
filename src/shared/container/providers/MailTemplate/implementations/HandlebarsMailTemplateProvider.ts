import handlebars from 'handlebars';
import IMailTemplateProvider from '@shared/container/providers/MailTemplate/models/IMailTemplateProvider';
import IParseMailTemplateDTO from '@shared/container/providers/MailTemplate/dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}
export default HandlebarsMailTemplateProvider;
