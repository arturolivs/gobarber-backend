import fs from 'fs';
import handlebars from 'handlebars';
import IMailTemplateProvider from '@shared/container/providers/MailTemplate/models/IMailTemplateProvider';
import IParseMailTemplateDTO from '@shared/container/providers/MailTemplate/dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFIleContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFIleContent);

    return parseTemplate(variables);
  }
}
export default HandlebarsMailTemplateProvider;
