Search.setIndex({docnames:["index","sources/configuration","sources/getting_started","sources/installation","sources/nlu_frameworks","sources/nlutestframework/global_config","sources/nlutestframework/has_logger","sources/nlutestframework/implementations/dialogflow_nlu_framework","sources/nlutestframework/implementations/luis_nlu_framework","sources/nlutestframework/implementations/package","sources/nlutestframework/implementations/rasa_nlu_framework","sources/nlutestframework/implementations/simple_json_data_set","sources/nlutestframework/implementations/snips_nlu_framework","sources/nlutestframework/intent_threshold_optimizer","sources/nlutestframework/nlu_benchmarker","sources/nlutestframework/nlu_data_entry","sources/nlutestframework/nlu_data_set","sources/nlutestframework/nlu_framework","sources/nlutestframework/nlu_intent_rating","sources/nlutestframework/optimizable_nlu_framework","sources/nlutestframework/package","sources/nlutestframework/parallel_exception","sources/nlutestframework/serializable"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","sources/configuration.rst","sources/getting_started.rst","sources/installation.rst","sources/nlu_frameworks.rst","sources/nlutestframework/global_config.rst","sources/nlutestframework/has_logger.rst","sources/nlutestframework/implementations/dialogflow_nlu_framework.rst","sources/nlutestframework/implementations/luis_nlu_framework.rst","sources/nlutestframework/implementations/package.rst","sources/nlutestframework/implementations/rasa_nlu_framework.rst","sources/nlutestframework/implementations/simple_json_data_set.rst","sources/nlutestframework/implementations/snips_nlu_framework.rst","sources/nlutestframework/intent_threshold_optimizer.rst","sources/nlutestframework/nlu_benchmarker.rst","sources/nlutestframework/nlu_data_entry.rst","sources/nlutestframework/nlu_data_set.rst","sources/nlutestframework/nlu_framework.rst","sources/nlutestframework/nlu_intent_rating.rst","sources/nlutestframework/optimizable_nlu_framework.rst","sources/nlutestframework/package.rst","sources/nlutestframework/parallel_exception.rst","sources/nlutestframework/serializable.rst"],objects:{"nlutestframework.global_config":{GlobalConfig:[5,0,1,""]},"nlutestframework.global_config.GlobalConfig":{__init__:[5,1,1,""],ignore_cache:[5,1,1,""],iterations:[5,1,1,""],python:[5,1,1,""]},"nlutestframework.has_logger":{HasLogger:[6,0,1,""]},"nlutestframework.has_logger.HasLogger":{__init__:[6,1,1,""],_logger:[6,1,1,""]},"nlutestframework.implementations.dialogflow_nlu_framework":{DialogflowNLUFramework:[7,0,1,""]},"nlutestframework.implementations.dialogflow_nlu_framework.DialogflowNLUFramework":{cleanupTraining:[7,1,1,""],construct:[7,1,1,""],prepareDataSet:[7,1,1,""],rateIntents:[7,1,1,""],train:[7,1,1,""],unprepareDataSet:[7,1,1,""]},"nlutestframework.implementations.luis_nlu_framework":{LUISNLUFramework:[8,0,1,""]},"nlutestframework.implementations.luis_nlu_framework.LUISNLUFramework":{FAKE_VERSION:[8,2,1,""],cleanupTraining:[8,1,1,""],construct:[8,1,1,""],train:[8,1,1,""],unprepareDataSet:[8,1,1,""]},"nlutestframework.implementations.rasa_nlu_framework":{RasaNLUFramework:[10,0,1,""]},"nlutestframework.implementations.rasa_nlu_framework.RasaNLUFramework":{cleanupTraining:[10,1,1,""],construct:[10,1,1,""],train:[10,1,1,""],unprepareDataSet:[10,1,1,""]},"nlutestframework.implementations.simple_json_data_set":{SimpleJSONDataSet:[11,0,1,""]},"nlutestframework.implementations.snips_nlu_framework":{SnipsNLUFramework:[12,0,1,""]},"nlutestframework.implementations.snips_nlu_framework.SnipsNLUFramework":{cleanupTraining:[12,1,1,""],construct:[12,1,1,""],prepareDataSet:[12,1,1,""],rateIntents:[12,1,1,""],train:[12,1,1,""],unprepareDataSet:[12,1,1,""]},"nlutestframework.intent_threshold_optimizer":{IntentThresholdOptimizer:[13,0,1,""]},"nlutestframework.intent_threshold_optimizer.IntentThresholdOptimizer":{optimize:[13,1,1,""]},"nlutestframework.nlu_benchmarker":{NLUBenchmarker:[14,0,1,""]},"nlutestframework.nlu_benchmarker.NLUBenchmarker":{__annotations__:[14,2,1,""],cancel:[14,1,1,""],confusionMatrixToF1Scores:[14,1,1,""],createFrameworks:[14,1,1,""],getInstance:[14,1,1,""],loadDataSets:[14,1,1,""],run:[14,1,1,""],runFromConfig:[14,1,1,""],runFromConfigFile:[14,1,1,""]},"nlutestframework.nlu_data_entry":{NLUDataEntry:[15,0,1,""]},"nlutestframework.nlu_data_entry.NLUDataEntry":{__init__:[15,1,1,""],fromSerialized:[15,1,1,""],intent:[15,1,1,""],sentence:[15,1,1,""],serialize:[15,1,1,""]},"nlutestframework.nlu_data_set":{NLUDataSet:[16,0,1,""]},"nlutestframework.nlu_data_set.NLUDataSet":{__init__:[16,1,1,""],language:[16,1,1,""],reshuffle:[16,1,1,""],title:[16,1,1,""],training_data:[16,1,1,""],validation_data:[16,1,1,""]},"nlutestframework.nlu_framework":{NLUFramework:[17,0,1,""]},"nlutestframework.nlu_framework.NLUFramework":{__init__:[17,1,1,""],benchmark:[17,1,1,""],cleanupTraining:[17,1,1,""],construct:[17,1,1,""],create:[17,1,1,""],destruct:[17,1,1,""],prepareDataSet:[17,1,1,""],rateIntents:[17,1,1,""],title:[17,1,1,""],train:[17,1,1,""],unprepareDataSet:[17,1,1,""]},"nlutestframework.nlu_intent_rating":{NLUIntentRating:[18,0,1,""]},"nlutestframework.nlu_intent_rating.NLUIntentRating":{__init__:[18,1,1,""],detected_intent:[18,1,1,""],noneIfBelow:[18,1,1,""],sentence:[18,1,1,""],sorted_intents:[18,1,1,""]},"nlutestframework.optimizable_nlu_framework":{OptimizableNLUFramework:[19,0,1,""]},"nlutestframework.optimizable_nlu_framework.OptimizableNLUFramework":{_prepareDataSet:[19,1,1,""],_rateIntents:[19,1,1,""],construct:[19,1,1,""]},"nlutestframework.parallel_exception":{ParallelException:[21,3,1,""],run_in_parallel:[21,4,1,""]},"nlutestframework.parallel_exception.ParallelException":{__init__:[21,1,1,""],operation_exceptions:[21,1,1,""],rollback_exceptions:[21,1,1,""]},"nlutestframework.serializable":{Serializable:[22,0,1,""]},"nlutestframework.serializable.Serializable":{fromSerialized:[22,1,1,""],serialize:[22,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:exception","4":"py:function"},terms:{"boolean":[5,12,14,16],"case":[14,16,21],"class":[1,2,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,22],"default":[6,7,8,10,12,14,17,19],"export":4,"final":[16,17],"float":[13,14,15,17,18,19,22],"function":21,"import":4,"int":[5,10,13,14,15,16,17,19,22],"new":[7,8,10,12,15,16,17,22],"return":[5,6,7,8,10,12,13,14,15,16,17,18,19,21,22],"static":14,"while":[1,17],For:[1,7,8,10,12,17,19],That:14,The:[1,2,4,5,6,7,8,10,12,13,14,15,16,17,18,19,21,22],There:1,These:[3,4,16],Yes:4,__annotations__:14,__init__:[5,6,15,16,17,18,21],_global_config:[7,8,10],_logger:6,_nlubenchmarker__inst:14,_preparedataset:19,_rateint:19,abl:2,abort:14,about:[2,14,21],abov:1,absolut:[1,5],accept:2,access:[4,8],activ:3,actual:1,added:16,addit:[2,19],after:16,afterward:3,again:14,agent:[4,7],all:[1,4,14,17,19,21],alreadi:[13,14],also:[2,14],amount:16,ani:[2,4,21],api:[0,1,4,8],appli:21,applic:4,arg:[7,8,10,12,17,19],argument:[2,17],askubuntucorpu:1,assign:16,assum:16,async:[7,8,10,12,13,14,17,19,21],asynchron:21,author:[1,8],authoring_kei:[1,8],authoring_key_her:1,autom:4,automat:19,avail:[1,3,4],averag:[13,14,19],await:21,back:21,base:[1,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,21,22],baseexcept:21,bat:3,befor:[4,7,8,10,12,14,17],beforehand:4,being:17,belong:18,below:[18,19],benchmark:[2,4,7,12,13,14,17,19],berlin:[1,7],best:[14,18],between:[1,16],bewar:19,bin:3,bool:[5,12,14,15,16,17,19,22],both:1,box:2,built:[0,1,2,17,19],cach:[5,14,16],calcul:14,call:[2,3,5],callabl:21,can:[1,2,3,5,7,8,10,12,17,21],cancel:14,capabl:[15,22],certain:[17,18],chanc:16,chang:3,chart:14,chatbotcorpu:1,choos:10,chosen:6,classif:13,classmethod:[13,14,15,17,22],classvar:14,clean:17,cleanup:[7,8,10,12,17],cleanuptrain:[7,8,10,12,17],cognit:[1,8],com:[1,8,10],come:2,command:3,comment:2,common:1,compar:19,compat:[4,19],concept:[4,19],confid:[13,18,19],config:[1,14],configur:[0,2,5,7,8,10,12,14,17],confus:[14,17],confusion_matrix:14,confusionmatrixtof1scor:14,consid:3,consist:[1,15,22],construct:[4,6,7,8,10,12,15,17,19,22],constructor:[18,21],contain:[1,2,4,14,15,16,17,21,22],contrast:1,conveni:1,convert:1,copi:[18,21],corpora:1,correct:15,correspond:17,could:[14,16],creat:[3,4,6,14,17],createframework:14,creation:14,credenti:4,daemon:4,data:[2,4,5,7,8,10,12,13,14,15,16,17,19,22],data_path:[1,11,16],data_set:[1,7,12,13,14,17,19],decent:16,deconstruct:17,delet:4,denot:[1,21],depend:3,destroi:14,destruct:17,detail:[1,4,10,14,17],detected_int:18,dev:3,dialogflow:[1,7],dialogflow_nlu_framework:[9,20],dialogflownluframework:[4,7],dict:[14,15,17,22],dictionari:[1,14,15,17,22],differ:[4,16,19],directli:1,directori:[2,3,16],doc:[3,10],docker:4,document:[0,4],doe:16,doesn:4,don:[4,19],due:[14,16],dure:[4,6,19,21],each:[1,4,13,14,17,19,21],easi:3,either:[1,10,14,21],els:16,empti:[7,8,10,12,16,17],encod:[17,18],endpoint:[1,8],endpoint_her:1,enough:16,entiti:[7,12,17,19],entri:21,env:3,environ:[3,4,16],equal:18,equival:1,europ:[1,7],evalu:14,event:17,exampl:[1,2,5,7,8,10,12,17],except:21,execut:[3,4,5,7,8,10,12,17],exist:16,exit:[7,8,10,12,17],expand:16,expect:16,explain:1,extern:5,fail:[14,21],failur:21,fake_vers:8,fals:[11,12,14,16,19],few:[2,19],file:[2,4,14,16],fill:[15,22],find:[2,7,12,13,17,19],finish:17,first:[16,21],flag:[16,19],follow:[1,3,17,21],forc:17,format:[1,15,16,22],forwardref:[14,15,17,22],found:13,framework:[2,3,5,7,8,10,12,13,14,15,17,18,19],framework_config:[14,17],from:[1,3,14,16,18,19],fromseri:[15,22],full:14,fulli:4,further:2,futur:21,gener:14,get:[0,4,16],getinst:14,give:[2,7,8,10,12,17],given:[6,15,16,17,22],global:[3,5,7,8,10,12,14,17],global_config:[12,14,17,20],global_config_overrid:14,global_ignore_cach:14,globalconfig:[1,5,7,8,10,12,14,17],goe:14,google_application_credenti:4,gracefulli:14,grid:[13,19],grid_step_s:13,guarante:14,handl:4,has:[2,4],has_logg:[14,16,17,20],haslogg:[6,14,16,17],have:[3,4,19],header:3,help:2,here:[1,2],highest:[18,19],host:4,how:4,html:3,http:[1,7,8,10],iana:7,ignor:[5,14,16,19],ignore_cach:[5,11,16],implement:[1,4,5,7,8,10,11,12,16,17,19,20,21],includ:[7,8,10,12,17],incomplet:17,indic:[5,12,14,16],inform:[2,7,12,14,16,17,19,21],insid:3,instal:[0,2,12],instanc:[4,6,14,15,17,22],instanti:[6,17],instead:[3,19],intent:[4,7,12,13,14,15,16,17,18,19],intent_threshold:19,intent_threshold_optim:20,intentthresholdoptim:13,interact:4,interpret:[13,19],introduc:1,invalid:14,issu:[14,16],iter:[1,5,13,14,19],json:[1,4,15,22],just:3,kei:[1,8],keyword:17,kwarg:[7,8,10,12,17,19],languag:[11,12,16],least:[14,21],led:21,libpython3:3,librari:6,lifecycl:17,like:17,list:[0,1,2,7,14,15,16,17,18,21,22],load:[1,2,14,16],loaddataset:14,loader:2,local:2,locat:1,log:6,logger:[6,17],logger_titl:[6,14,17],look:17,lost:4,low:16,lowest:18,lui:[1,8],luis_nlu_framework:[9,20],luisnluframework:[4,8],mai:1,make:[3,4,6,16],malform:17,manag:3,map:[14,18],matrix:[14,17],maxim:13,maximum:13,mean:[14,19],measur:[5,14,17],mechan:21,messag:21,method:[2,4,7,8,10,12,14,15,16,17,19,22],microsoft:[1,8],might:[2,3],modul:5,more:[14,17],multipl:[1,13,21],must:[7,8,10,12,17],name:[1,3,4,6,7,17,19],need:[3,4,17,19],next:[7,12,14,17,19],nlu:[1,2,5,7,8,10,12,13,15,17,18,19],nlu_benchmark:20,nlu_data_entri:20,nlu_data_set:[11,20],nlu_framework:[7,12,19,20],nlu_intent_r:20,nlubenchmark:[1,2,14],nludataentri:[15,16,17],nludataset:[1,11,13,14,16,17,19],nluframework:[5,7,12,13,14,17,19],nluintentr:[7,12,17,18,19],nlutestframework:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,21,22],none:[4,6,7,8,10,11,12,13,14,15,16,17,18,19,21,22],noneifbelow:18,noth:21,num_iter:14,number:[5,13,14,16,19],object:[5,6,13,18,21,22],omit:[1,6,8,16,17],onc:21,one:[1,14,21],onli:[15,22],oper:21,operation_except:21,opportun:[7,8,10,12,17],optim:[4,13,19],optimiz:4,optimizable_nlu_framework:[8,10,20],optimizablenluframework:[4,8,10,19],optimize_intent_threshold:[1,19],optimizer_grid_search_step_s:[1,19],optimizer_iter:[1,19],option:[1,4,6,8,14,15,16,17,18,21],org:7,oserror:[14,16],other:[4,14,15,16,22],out:2,output:14,over:[14,19],overrid:[14,17],packag:[1,3,20],parallel:21,parallel_except:20,parallelexcept:[14,21],paramet:[5,6,7,8,10,12,13,14,15,16,17,18,19,21,22],pass:[1,18,21],path:[1,5,14,16],percentag:16,perform:[5,7,8,10,12,14,16,17],phase:21,pip:3,pipelin:[1,10],point:[4,16],posit:16,possibl:[7,14],pre:[7,8,10,12,17],prepar:[2,7,8,10,12,13,14,17],preparedataset:[7,12,17,19],present:4,pretrain:[1,10],previou:16,primit:[15,22],problem:21,process:[4,14],programmat:2,progress:[4,14],project:[3,4,7],properti:[5,6,15,16,17,18,21],provid:[4,17],pytest:3,python:[1,3,5,6],rais:[14,16,17,21],rang:[18,19],rasa:[1,10],rasa_nlu_framework:[9,20],rasanluframework:[1,4,10],rate:[7,12,15,17,18,19],rated_int:18,rateint:[7,12,17,19],react:17,read:14,receiv:21,recent:3,refer:[1,4,16,21],regard:4,rel:1,relat:[14,16],remain:16,remot:2,remov:16,repeat:[13,14,17,19],replac:18,repositori:2,represent:[15,22],requir:[1,2,3,4,12,14],reset:[7,8,10,12,17],reshuffl:16,resolv:21,resourc:12,respect:[1,2,4,5,14],result:[13,14,17,21],roll:21,rollback:21,rollback_except:21,rollback_op:21,root:3,run:[2,4,13,14,21],run_in_parallel:21,runfromconfig:14,runfromconfigfil:14,runtim:[1,8],runtime_kei:[1,8],runtime_key_her:1,safe:[15,22],same:[1,21],score:[13,14],script:2,search:[13,19],second:[10,21],section:[1,2],see:[5,7,10,14,17],select:19,sentenc:[7,12,15,16,17,18,19],serial:[15,22],serializ:[15,20],server:10,set:[2,4,6,7,8,10,12,13,14,16,17,19,21],setup:[1,3,4],setuptool:3,should:[3,14,16],show:1,shuffl:16,similar:[3,15,22],simple_json_data_set:[9,20],simplejson:1,simplejsondataset:[1,2,11],simpli:1,singl:[1,14],singleton:14,situat:14,size:19,skip:[2,12,21],skip_language_instal:12,snip:1,snips_nlu_framework:[9,20],snipsnluframework:[1,4,5,12],some:[4,19],someth:14,somewher:16,sort:18,sorted_int:18,sourc:[3,5,6,7,8,10,11,12,13,14,15,16,17,18,19,21,22],special:1,specif:[1,3,16,17],split:16,stabl:3,stage:17,start:[0,10,17],state:[7,8,10,12,17],step:[2,7,8,10,12,16,17,19],str:[5,6,7,8,10,12,14,15,16,17,18,19,21,22],structur:1,subclass:4,succe:21,succeed:21,summari:14,supervis:10,support:[1,2,4],sure:[3,4,16],tag:16,test:[1,4,5,7,8,10,12,14,17,19],than:4,them:[2,4,14],thi:[2,3,4,5,6,7,8,10,12,14,15,16,17,19,21,22],third:21,three:1,threshold:[4,13,18,19],thrown:21,time:[7,10,17],time_zon:[1,7],time_zone_her:1,timeout:10,titl:[6,11,16,17],train:[7,8,10,12,16,17,19],training_data:[7,8,10,12,16,17],treat:16,tupl:[18,21],two:21,txt:3,type:[1,5,6,7,8,10,12,13,14,15,16,17,18,19,21,22],typeerror:17,under:3,union:[14,15,17,22],unpreparedataset:[7,8,10,12,17],unus:4,use:[1,2,6,8,10],used:[3,5,16,21],user:[4,16],using:[1,2,3],valid:[16,17],validation_data:16,validation_percentag:[1,11,16],valu:[1,6,7,15,19,22],valueerror:16,vari:1,variabl:[4,16],version:3,via:3,virtual:3,virtualenv:3,wai:[4,13],wait:10,want:[2,6],webapplicationscorpu:1,were:14,westeurop:[1,8],whatev:17,when:[1,19],whether:[5,12,14,16],which:[1,2,13,14,15,21,22],whole:[7,8,10,12,14,16,17,21],window:[3,19],without:2,wrong:14,www:7,yaml:[1,14],yamlerror:14,yes:1,yml:1,you:[2,3,19],your:[3,4],zone:7},titles:["NLUTestFramework - A framework to benchmark and compare NLU frameworks.","Configuration","Getting Started","Installation","List of Built-In NLU Frameworks","global_config","has_logger","dialogflow_nlu_framework","luis_nlu_framework","nlutestframework.implementations","rasa_nlu_framework","simple_json_data_set","snips_nlu_framework","intent_threshold_optimizer","nlu_benchmarker","nlu_data_entry","nlu_data_set","nlu_framework","nlu_intent_rating","optimizable_nlu_framework","nlutestframework","parallel_exception","serializable"],titleterms:{addit:4,benchmark:0,build:3,built:4,compar:0,configur:[1,4],data:1,dialogflow:4,dialogflow_nlu_framework:7,document:3,file:1,framework:[0,1,4],full:1,get:2,global:1,global_config:5,googl:4,has_logg:6,implement:9,instal:3,intent_threshold_optim:13,list:4,lui:4,luis_nlu_framework:8,microsoft:4,nlu:[0,4],nlu_benchmark:14,nlu_data_entri:15,nlu_data_set:16,nlu_framework:17,nlu_intent_r:18,nlutestframework:[0,9,20],optimizable_nlu_framework:19,parallel_except:21,rasa:4,rasa_nlu_framework:10,run:3,serializ:22,set:1,simple_json_data_set:11,snip:4,snips_nlu_framework:12,start:2,step:4,test:3}})